import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetSignedUpUsers = () => {
    // getting the users that have signedIn
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["signedUp"],
        queryFn:async()=>{
            const response=await axios.get("http://localhost:3000/signUp")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetSignedUpUsers;