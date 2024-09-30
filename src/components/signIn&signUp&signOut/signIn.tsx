import { useForm } from "react-hook-form";
import useGetSignedInUsers from "../../hooks/useGetHooks/useGetSignedInUsers";
import useGetSignedUpUsers from "../../hooks/useGetHooks/useGetSignedUpUsers";
import useSignInUser from "../../hooks/useSignInUser";
import { TUserData } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Form from "./form";
const SignIn = () => {
  // destructure useGetUsers hook
  const { data, error, isError, isLoading } = useGetSignedUpUsers(); // >>> getting the users that have signedUp before and pass the properties as props to Form component
  // destructure useGetSignedInUsers hook
  const { data: userData } = useGetSignedInUsers(); // >>> getting the users that have signedIn before
  // mutate user by this hook to add it into signIned users by post Request
  const { mutate } = useSignInUser();
  const navigate = useNavigate();
  const form = useForm<TUserData>();
  // destructure my form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  // at this function check is there any correct user to mutate it or not
  const submit = (user: TUserData) => {
    const exist = data.find(
      (item: TUserData) =>
        item.email === user.email && item.password === user.password,
    ); // >>> find exact user in signedUp Users
    const find = userData.find(
      (item: TUserData) =>
        item.email === user.email && item.password === user.password,
    ); // >>> find exact user in signIned users
    // if the user is signed up before and it hasen't signed in yet,mutate user and set user's token
    if (exist && !find) {
      mutate(user),
        localStorage.setItem("token", user.LastName + "ThisIsTokenCode");
      navigate("/netflixDashboard", { replace: true }); // after signIn navigate to neflixDashbord page
    } else {
      // if the user hasn't  signed up yet show this alert
      alert(
        "The user account has not signed up yet,you need to sign up first then try again",
      );
      // if the user has already signed in show this alert
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
      <form noValidate onSubmit={handleSubmit(submit)} className='form'>
        <Form
          register={register}
          errors={errors}
          title={"Sign In"}
          link='/sign_up'
          text='New To Netflix?'
          linkText='Sign Up Now'
        />
      </form>
    </div>
  );
};

export default SignIn;
