import { createContext, useContext, useState } from "react";
import { TMovies } from "../../types/types";
import { useEffect } from "react";
const myContext = createContext<any>("");
const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  // we use this state to get searched words in our search input
  const [search, setSearch] = useState<string>("");
  // this function checks if our localStorage.storage is empty set [] as initial sate otherwise set the content we get from localStorage.storage
  const getInitialState = () => {
    const item = localStorage.getItem("item");
    return item?.length ? JSON.parse(item) : [];
  };
  // this state can store marked movies so we can get them in anouther component
  const [mark, setMark] = useState<TMovies[]>(getInitialState);
  // store mark's content by setting it in localStorage
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(mark));
  }, [mark]);
  //   delete the movie we want to delete with this function
  const handleDelete = (id: number) => {
    const filter = mark.filter((item: TMovies) => item.id != id); // >> find the marked movie's id that doesen't match the id of the movie we want to delete
    setMark(filter); //>> set new marked movies list
  };
  return (
    <myContext.Provider
      value={{ search, setSearch, mark, setMark, handleDelete }}>
      {children}
    </myContext.Provider>
  );
};
export const useMyContext = () => useContext(myContext);
export default MyContextProvider;
