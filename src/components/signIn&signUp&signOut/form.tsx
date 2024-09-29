import { Link } from "react-router-dom";
import { TSignInAndSignOut } from "../../types/types";
// the props we got from sign in and sign out components
const Form = ({
  register,
  errors,
  title,
  link,
  text,
  linkText,
}: TSignInAndSignOut) => {
  return (
    <>
      {/* form title */}
      <h1 className='text-3xl'>{title}</h1>
      <div className='flex flex-col w-full gap-y-6  child:input child:py-3 xs:child:py-4 child:px-1 '>
        {/* email input */}
        <input
          placeholder='Email'
          type='email'
          {...register("email", {
            required: true,
            pattern: {
              value: /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g, //regular expression to check email format
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
          type='password'
          {...register("password", {
            required: true,
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, //regular expression to check password format
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
        className='w-full bg-red-700 active-btn text-center font-semibold py-3 xs:py-4 text-xl md:text-2xl rounded-md cursor-pointer'
        value={title}
        type='submit'
      />
      {/* form footer */}
      <div className='flex w-full items-start  justify-between'>
        <div className='flex flex-col'>
          <div>{text}</div>
          <Link className='text-neutral-400 underline' to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
