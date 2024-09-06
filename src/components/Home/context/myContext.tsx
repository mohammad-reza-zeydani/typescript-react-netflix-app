import { useState,createContext,useContext } from "react";
const MyContext=createContext<any>(null)
export const useMyContext=()=>{return useContext(MyContext)}
const MyContextProvider = ({children}:{children:React.ReactNode}) => {
    const [showPassword,setShowPassword]=useState<boolean>(false)
    return ( 
        <MyContext.Provider value={{
            showPassword,setShowPassword
        }}>
            {children}
        </MyContext.Provider>
     );
}
 
export default MyContextProvider;