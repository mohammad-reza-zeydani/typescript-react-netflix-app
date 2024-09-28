import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetMovies = (search?:string) => {
    // getting the List of the movies
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["movies",search],
        queryFn:async({queryKey})=>{
            const searchResult=queryKey[1] as string
            const response=await axios.get(`http://localhost:3000/movies?name_like=${searchResult}`)
            return response.data 
        }
    })
    return {data,error,isError,isLoading};
}
 
export default useGetMovies;