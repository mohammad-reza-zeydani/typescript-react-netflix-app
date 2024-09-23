import { createContext,useContext, useState } from "react";
const myContext=createContext<any>("")
export const useMyContext=()=>useContext(myContext)
const MyContextProvider = ({children}:{children:React.ReactNode}) => {
    const [search,setSearch]=useState<string>("")
    return ( 
        <myContext.Provider value={{search,setSearch}}>
            {children}
        </myContext.Provider>
     );
}
 
export default MyContextProvider;