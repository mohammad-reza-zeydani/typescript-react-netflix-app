import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TData } from "../types/types";
const useSignInUser = () => {
    // post the user that want to signIn
    const {mutate}=useMutation({
        mutationFn:async(user:TData)=>{
            const response=await axios.post('http://localhost:3000/signIn/',user)
            return response.data
        },
    })
    return {mutate};
}
 
export default useSignInUser;