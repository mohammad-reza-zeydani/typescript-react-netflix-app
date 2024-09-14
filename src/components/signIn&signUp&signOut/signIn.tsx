import { useForm } from "react-hook-form";
import useGetSignedUpUsers from "../../hooks/useGetSignedUpUsers";
import useGetSignedInUsers from "../../hooks/useGetSignedInUsers";
import useSignInUser from "../../hooks/useSignInUser";
import { TData } from "../../types/types";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../loading/Loading";
const SignIn = () => {
  // destructure useGetUsers hook
  const { data, error, isError, isLoading } = useGetSignedUpUsers(); // >>> getting the users that have signedUp before
  // destructure useGetSignedInUsers hook
  const { data: userData } = useGetSignedInUsers(); // >>> getting the users that have signedIn before
  // mutate user by this hook to add it into signIned users by post Request
  const { mutate } = useSignInUser();
  const navigate = useNavigate();
  const form = useForm<TData>();
  // destructure my form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  // at this function check is there any correct user to mutate it or not
  const submit = (user: TData) => {
    const exist = data.find(
      (item: TData) =>
        item.email === user.email && item.password === user.password,
    ); // >>> find exact user in signedUp Users
    const find = userData.find(
      (item: TData) =>
        item.email === user.email && item.password === user.password,
    ); // >>> find exact user in signIned users
    if (exist && !find) {
      mutate(user),
        localStorage.setItem("token", user.LastName + "ThisIsTokenCode");
      navigate("/netflix", { replace: true });
    } else {
      !exist &&
        alert(
          "The user account has not signed up yet,you need to sign up first then try again",
        );
      find && alert("the account has already signIned");
    }
  };
  return (
    <div className='flex flex-col  items-center mt-2 mb-20 '>
      {/* if error is true show message */}
      {isError && <h1 className='error'>{error?.message}</h1>}
      {/* if loading is true show loading */}
      {isLoading && <Loading />}
      {/* sign in form */}
      <form
        noValidate
        onSubmit={handleSubmit(submit)}
        className='form'>
               {/* form title */}
        <h1 className='text-3xl'>Sign In</h1>
        <div className='form-body'>
          {/* email input */}
          <input
            placeholder='Email'
            type='email'
            {...register("email", {
              required: true,
              pattern: {
                value: /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g,
                message: "invalid format",
              },
              validate: {
                notAdmin: (field) => {
                  return (
                    field !== "mmdzyzw033zeydani@gmail.com" ||
                    "try another email address"
                  );
                },
                notBlockListed: (field) => {
                  return !field.endsWith("baddomain.com") || "unacceptable";
                },
              },
            })}
          />
          {/* email validation messages */}
          {errors.email?.message ? errors.email.message : null}
          {errors.email &&
            errors.email.type === "required" &&
            "Email is required"}
              {/* password input */}
          <input
            placeholder='Password'
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                message:
                  "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.",
              },
            })}
          />
             {/* password validation messages */}
          {errors.password &&
            errors.password.type === "required" &&
            "Password is required"}
          {errors.password?.message ? errors.password.message : null}
          {/* submit input */}
        </div>
        <input
          className='submit'
          value={"Sign In"}
          type='submit'
        />
        {/* form footer */}
        <div className='flex w-full items-start  justify-between'>
          <div className='flex flex-col'>
            <div>New To Netflix?</div>
            {/*back to sign up page link*/}
            <Link className='text-neutral-400 underline' to={"/sign_up"}>
              Sign Up Now
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
