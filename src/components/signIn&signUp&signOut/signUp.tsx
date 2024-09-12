import { useForm } from "react-hook-form";
import useSignUpUser from "../../hooks/useSignUpUser";
import { TData } from "../../types/types";
import { useNavigate } from "react-router-dom";
import useGetSignedUpUsers from "../../hooks/useGetSignedUpUsers";
import { useMyContext } from "../Home/context/myContext";
import Loading from "../loading/Loading";
const SignUp = () => {
  const { showPassword, setShowPassword } = useMyContext();
  // destructure useGetSignedUpUsers hook
  const { data, error, isError, isLoading } = useGetSignedUpUsers(); // >>> getting the users that have signedUp before
  const form = useForm<TData>();
  // destructure my form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  // mutate user by this hook to add it into signed Up users by post request
  const { mutate } = useSignUpUser();
  const navigate = useNavigate();
  // at this function check is there any correct user to mutate it or not
  const submit = (user: TData) => {
    const exist = data.find(
      (item: TData) =>
        item.email === user.email && item.password === user.password,
    ); // >>> find the exact user in signedUp users
    if (exist) {
      alert("this user has already signed up,you need to sign in");
    } else {
      mutate(user);
      navigate("/sign_in", { replace: true });
    }
  };
  return (
    <div className=' flex flex-col justify-center items-center mt-2 mb-20 '>
      {/* if error is true show message */}
      {isLoading && <Loading />}
      {/* if loading is true show loading */}
      {isError && <h1 className='error'>{error?.message}</h1>}
      {/* sign up form */}
      <form
        noValidate
        onSubmit={handleSubmit(submit)}
        className='flex flex-col  justify-center items-center w-full mt-3 child:w-11/12 gap-y-5 bg-black text-white'>
        {/* form title */}
        <h1 className='text-3xl'>Sign Up</h1>
        <div className='flex flex-col gap-y-3 child:input child:py-2 xs:child:py-5 child:px-1'>
          {/* first name input */}
          <input
            placeholder='FirstName'
            type='text'
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
          />
          {/* first name validation messages */}
          {errors.firstName &&
            errors.firstName.type === "required" &&
            "First Name is required"}
          {errors.firstName &&
            errors.firstName.type === "maxLength" &&
            "Max length is 15"}
          {errors.firstName &&
            errors.firstName.type === "minLength" &&
            "min length is 3"}
          {/* last name input */}
          <input
            placeholder='LastName'
            type='text'
            {...register("LastName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
          />
          {/* last name validation messages */}
          {errors.LastName &&
            errors.LastName.type === "required" &&
            "Last Name is required"}
          {errors.LastName &&
            errors.LastName.type === "maxLength" &&
            "Max length is 20"}
          {errors.LastName &&
            errors.LastName.type === "minLength" &&
            "min length is 3"}
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
        </div>
        {/* form footer */}
        <div className='flex items-center justify-between gap-x-3 xs:gap-x-3 text-base xs:text-xl'>
          <div className='flex items-center gap-x-3'>
            {/* showing or not showing password input */}
            <span className='text-xs xs:text-sm'>Show Password</span>
            <input
              onClick={() => setShowPassword(!showPassword)}
              type='checkbox'
            />
            {/*radio input (male or female)*/}
            Male
            <input
              defaultChecked={true}
              value={"male"}
              type='radio'
              {...register("gender")}
            />
            Female
            <input type='radio' value={"female"} {...register("gender")} />
          </div>
          {/*submit input*/}
          <input
            className='bg-red-700 w-1/3 xl:w-1/2 py-1 px-1 text-xs xs:text-base rounded-md cursor-pointer active-btn '
            value={"Sign Up"}
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
