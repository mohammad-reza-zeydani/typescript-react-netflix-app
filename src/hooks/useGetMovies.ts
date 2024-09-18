import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetMovies = () => {
    // getting the List of the movies
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["movies"],
        queryFn:async()=>{
            const response=await axios.get("http://localhost:3000/movies")
            return response.data
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetMovies;