import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetUsers = () => {
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const response=await axios.get("http://localhost:3000/user")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetUsers;