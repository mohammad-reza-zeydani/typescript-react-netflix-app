import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TUserData } from "../types/types";
const useSignUpUser = () => {
    const {mutate}=useMutation({
        // post the user that want to signUp
        mutationFn:async(user:TUserData)=>{
            const response=await axios.post('http://localhost:3000/signUp/',user)
            return response.data
        },
    })
    return {mutate};
}
 
export default useSignUpUser