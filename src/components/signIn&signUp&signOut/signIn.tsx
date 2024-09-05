import { useForm } from "react-hook-form";
import useGetUsers from "../../hooks/useGetUsers";
import useSignInUser from "../../hooks/useSignInUser";
import { TData } from "../../types/types";
import {useNavigate,Link } from "react-router-dom";
import Loading from "../loading/Loading";
const SignIn = () => {
    const {data,error,isError,isLoading}=useGetUsers()
    const {mutate}=useSignInUser()
    const navigate=useNavigate()
    const form=useForm<TData>()
    const{register,handleSubmit,formState:{errors}}=form
    const submit=(user:TData)=>{
    const exist=data.find((item:TData)=>item.email===user.email&&item.password===user.password)
    if(exist){
      mutate(user),
      localStorage.setItem("token",user.LastName+"ThisIsTokenCode")
      navigate("/netflix",{replace:true})
    }else{
    alert("The user account has not signed up yet,you need to sign up first then try again")
    }
    }
    return ( 
        <div className="flex flex-col  items-center mt-2 mb-20 ">
          {isError && <h1 className="text-4xl bg-red-500 animate-pulse top-24">{error?.message}</h1>}
          {isLoading && <Loading/>}
        <form noValidate onSubmit={handleSubmit(submit)} className=" flex flex-col gap-y-6 justify-center items-start w-11/12 sm:w-1/2 lg:w-1/3 px-8 sm:px-12 py-5 xs:py-11 text-white">
        <h1 className="text-3xl">Sign In</h1>
       <div className="flex flex-col w-full gap-y-6  child:input child:py-3 xs:child:py-4 child:px-1 ">
        <input  placeholder="Email"  type="email" {...register("email",{
          required:true,
          pattern:{
           value:/[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g,
           message:"invalid format"
           },
          validate:{
           notAdmin:(field)=>{
               return (field !=="mmdzyzw033zeydani@gmail.com" || "try another email address")
           },
           notBlockListed:(field)=>{
               return (!field.endsWith("baddomain.com") || "unacceptable")
           }
       }
        })} />
           {
               errors.email?.message ?errors.email.message:null
            }
        {errors.email && errors.email.type === "required" && "Email is required"}
        <input placeholder="Password" type="password" {...register("password",{
         required:true,
         pattern:{
            value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
            message:"Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
          }
        })} />
        {errors.password && errors.password.type === "required" && "Password is required"}
        {
                errors.password?.message ?errors.password.message:null
        }
       </div>
       <input className="bg-red-700 w-full text-center py-3 xs:py-4 text-xl md:text-2xl rounded-md cursor-pointer" value={"Sign In"} type="submit" />
       <div className="flex flex-col">
       <div>New To Netflix?</div>
        <Link className="text-neutral-400 underline" to={"/sign_up"}>Sign Up Now</Link>
       </div>
        </form>
      </div>
     );
}
 
export default SignIn;