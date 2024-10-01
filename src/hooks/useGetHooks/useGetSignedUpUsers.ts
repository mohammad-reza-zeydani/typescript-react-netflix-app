import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetSignedUpUsers = () => {
    // getting the users that have signedUp
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["signedUp"],
        queryFn:async()=>{
            const response=await axios.get("https://servernetflix.onrender.com/signUp")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetSignedUpUsers;