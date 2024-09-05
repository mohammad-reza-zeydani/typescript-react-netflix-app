import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetSignedInUsers = () => {
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["signedIn"],
        queryFn:async()=>{
            const response=await axios.get("http://localhost:3000/signIn")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetSignedInUsers;