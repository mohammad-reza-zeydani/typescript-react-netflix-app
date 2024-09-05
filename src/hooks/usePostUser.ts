import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TData } from "../types/types";
const usePostUser = () => {
    const {mutate}=useMutation({
        mutationFn:async(user:TData)=>{
            const response=await axios.post('http://localhost:3000/user/',user)
            return response.data
        },
    })
    return {mutate};
}
 
export default usePostUser