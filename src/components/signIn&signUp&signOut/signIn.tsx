import { useForm } from "react-hook-form";
import useGetSignedInUsers from "../../hooks/useGetHooks/useGetSignedInUsers";
import useSignInUser from "../../hooks/useSignInUser";
import { TUserData } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Form from "./form";
const SignIn = () => {
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
    mutate(user),
    localStorage.setItem("token", user.LastName + "ThisIsTokenCode");
    navigate("/", { replace: true });
    alert("you signed in successfully")
  };
  return (
    <div className='flex flex-col  items-center mt-2 mb-20 '>
      {/* sign in form */}
      <form noValidate onSubmit={handleSubmit(submit)} className='form'>
        <Form
          register={register}
          errors={errors}
          title={"Sign In"}
          link='/sign_up'
          text='netflix'
          linkText='home page'
        />
      </form>
    </div>
  );
};

export default SignIn;
