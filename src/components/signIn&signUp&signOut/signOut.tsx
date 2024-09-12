import { useForm } from "react-hook-form";
import { TData } from "../../types/types";
import Loading from "../loading/Loading";
import useGetSignedInUsers from "../../hooks/useGetSignedInUsers";
import useSignOutUser from "../../hooks/useSignOutUser";
import { useNavigate, Link } from "react-router-dom";
import { useMyContext } from "../Home/context/myContext";
const SignOUt = () => {
  const navigate = useNavigate();
  // destructure useGetSignedInUsers hook
  const { data, isError, error, isLoading } = useGetSignedInUsers(); // >>> getting the users that have signedIn before
  // my context to handle true or false for showing or not showing password
  const { showPassword, setShowPassword } = useMyContext();
  // mutate user by this hook to remove it from signIned users by delete request
  const { mutate } = useSignOutUser();
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
    ); // >>> find the exact user in signIned users
    if (exist) {
      mutate(exist.id);
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    } else {
      alert("User Not Found,The Email or Password Might Be Wrong");
    }
  };
  return (
    <div className='flex flex-col  items-center mt-2 mb-20 '>
      {/* if error is true show message */}
      {isError && <h1 className='error'>{error?.message}</h1>}
      {/* if loading is true show loading */}
      {isLoading && <Loading />}
      {/* sign out form */}
      <form
        noValidate
        onSubmit={handleSubmit(submit)}
        className='form'>
        {/* form title */}
        <h1 className='text-3xl'>Sign Out</h1>
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
            type={showPassword ? "text" : "password"}
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
          value={"Sign Out"}
          type='submit'
        />
        {/* form footer */}
        <div className='flex w-full items-start  justify-between'>
          <div className='flex flex-col'>
            <div>dont you want to sign out?</div>
            {/*back to home page link*/}
            <Link className='text-neutral-400 underline' to={"/"}>
              back to home page
            </Link>
          </div>
          {/* showing or not showing password input */}
          <div className='flex items-center gap-x-2'>
            <input
              onClick={() => setShowPassword(!showPassword)}
              type='checkbox'
            />
            <h3 className='text-sm'>Show password</h3>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignOUt;
