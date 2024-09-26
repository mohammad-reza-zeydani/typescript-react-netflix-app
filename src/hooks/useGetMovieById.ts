import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetMovieById = (id:string | undefined) => {
    // getting the movie by its id
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["movieId",id],
        queryFn:async()=>{
            const response=await axios.get(`http://localhost:3000/movies/${id}`)
            return response.data 
        },
    })
    return {data,error,isError,isLoading};
}
 
export default useGetMovieById