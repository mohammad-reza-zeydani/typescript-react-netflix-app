import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TUserData } from "../types/types";
const useSignInUser = () => {
    // post the user that want to signIn
    const {mutate}=useMutation({
        mutationFn:async(user:TUserData)=>{
            const response=await axios.post('https://servernetflix.onrender.com/signIn/',user)
            return response.data
        },
    })
    return {mutate};
}
 
export default useSignInUser;