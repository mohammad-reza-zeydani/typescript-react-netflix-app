import { createContext, useContext, useState } from "react";
import { TMovies } from "../../types/types";
import { useEffect } from "react";
const myContext = createContext<any>("");
const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  // search state for search input
  const [search, setSearch] = useState<string>("");
  const getInitialState = () => {
    const item = localStorage.getItem("item");
    return item?.length ? JSON.parse(item) : [];
  };
  //    this state is to store marked movies
  const [mark, setMark] = useState<TMovies[]>(getInitialState);
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(mark));
  }, [mark]);
  //   delete the movie
  const handleDelete = (id: number) => {
    const filter = mark.filter((item: TMovies) => item.id != id);
    setMark(filter);
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
