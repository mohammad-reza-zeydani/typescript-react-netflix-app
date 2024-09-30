import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const useSignOutUser = () => {
    const {mutate}=useMutation({
        // delete the user that want to signOut
        mutationFn:async(user:number)=>{
            const response=await axios.delete(`http://localhost:3000/signIn/${user}`)
            return response.data
        },
    })
    return {mutate};
}
 
export default useSignOutUser;