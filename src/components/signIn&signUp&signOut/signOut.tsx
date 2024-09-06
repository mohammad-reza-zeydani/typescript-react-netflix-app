import { useForm } from "react-hook-form";
import { TData } from "../../types/types";
import Loading from "../loading/Loading";
import useGetSignedInUsers from "../../hooks/useGetSignedInUsers";
import useSignOutUser from "../../hooks/useSignOutUser";
import { useNavigate } from "react-router-dom";
const SignOUt = () => {
    const navigate=useNavigate()
    const {data,isError,error,isLoading}=useGetSignedInUsers()
    const {mutate}=useSignOutUser()
    const form=useForm<TData>()
    const{register,handleSubmit,formState:{errors}}=form
    const submit=(user:TData)=>{
        const exist=data.find((item:TData)=>item.email===user.email&&item.password===user.password)
        if(exist){
            mutate(exist.id)
            localStorage.removeItem("token")
            navigate("/",{replace:true})
        }else{
            alert("User Not Found,The Email or Password Might Be Wrong")
        }
    }
    return ( 
        <form onSubmit={handleSubmit(submit)} className="flex flex-col  items-center mt-2 mb-20">
            {isError && <h1 className="error">{error?.message}</h1>}
            {isLoading && <Loading/>}
            <h2 className="text-xl xs:text-3xl">Sign Out Your Account</h2>
        <div className="flex flex-col gap-y-4 justify-center items-start w-full px-2 xs:w-1/2 child:w-full child:input child:py-3 child:px-2">
            <input placeholder="Email" type="email" {...register("email",{
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
            })}/>
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
        <input className="bg-red-700 active-btn rounded-md px-5 py-2 text-xl active-btn " value={"Sign Out"} type="submit" />
        </form>
     );
}
 
export default SignOUt;