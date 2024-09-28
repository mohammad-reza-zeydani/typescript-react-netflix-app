import { useForm } from "react-hook-form";
import { TUserData } from "../../types/types";
import Loading from "../loading/Loading";
import useGetSignedInUsers from "../../hooks/useGetSignedInUsers";
import useSignOutUser from "../../hooks/useSignOutUser";
import { useNavigate} from "react-router-dom";
import Form from "./form";
const SignOUt = () => {
  const navigate = useNavigate();
  // destructure useGetSignedInUsers hook
  const { data, isError, error, isLoading } = useGetSignedInUsers(); // >>> getting the users that have signedIn before and pass the properties as props to Form component
  // mutate user by this hook to remove it from signIned users by delete request
  const { mutate } = useSignOutUser();
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
    ); // >>> find the exact user in signIned users
    // if the user's password and email is valid mutate it's id to signOut and navigte to home page
    if (exist) {
      mutate(exist.id);
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    } else {
      // the user's password and email is not valid ,so show this alert
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
        <Form register={register} errors={errors} title={"Sign Out"} link="/" text="dont you want to sign out ?" linkText="back to the home page"/>
      </form>
    </div>
  );
};
export default SignOUt;
