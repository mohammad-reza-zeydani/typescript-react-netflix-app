import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetSignedInUsers = () => {
    // getting the users that have signedIn
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["signedIn"],
        queryFn:async()=>{
            const response=await axios.get("https://servernetflix.onrender.com/signIn")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetSignedInUsers;