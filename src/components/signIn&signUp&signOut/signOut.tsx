import { useForm } from "react-hook-form";
import { TData } from "../../types/types";
import Loading from "../loading/Loading";
import useGetSignedInUsers from "../../hooks/useGetSignedInUsers";
import useSignOutUser from "../../hooks/useSignOutUser";
import { useNavigate,Link } from "react-router-dom";
import { useMyContext } from "../Home/context/myContext";
const SignOUt = () => {
    const navigate=useNavigate()
    const {data,isError,error,isLoading}=useGetSignedInUsers()
    const {showPassword,setShowPassword}=useMyContext()
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
        <div className="flex flex-col  items-center mt-2 mb-20 ">
          {isError && <h1 className="error">{error?.message}</h1>}
          {isLoading && <Loading/>}
        <form noValidate onSubmit={handleSubmit(submit)} className=" flex flex-col gap-y-6 justify-center items-start w-11/12 sm:w-1/2 lg:w-1/3 px-8 sm:px-12 py-5  text-white">
        <h1 className="text-3xl">Sign Out</h1>
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
        <input placeholder="Password" type={showPassword?"text":"password"} {...register("password",{
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
       <input className='w-full bg-red-700 active-btn text-center py-3 xs:py-4 text-xl md:text-2xl rounded-md cursor-pointer' value={"Sign Out"} type="submit" />
       <div className="flex items-start w-full justify-between">
       <div className="flex flex-col">
       <div>Dont you want to sign out?</div>
        <Link className="text-neutral-400 underline" to={"/"}>Back to home page</Link>
       </div>
       <div className="flex items-center gap-x-2">
        <input onClick={()=>setShowPassword(!showPassword)} type="checkbox" />
        <h3 className="text-sm">Show password</h3>
       </div>
       </div>
        </form>
      </div>
     );
}
 
export default SignOUt;