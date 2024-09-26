import useGetMovies from "../../../hooks/useGetMovies";
import { useMyContext } from "../../context/context";
import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
const DashBoardBody = () => {
    const {search}=useMyContext()
     // destructure useGetMovies hook
  const {data,isLoading,isError,error}=useGetMovies(search)
    return ( 
        <body className=' my-14 sm:my-16 space-y-20 text-white bg-black'>
        {/* showing search result by data length */}
      {search.length !==0 &&  <h1 className="text-center text-white text-4xl lg:text-5xl">search result = {data && data.length}</h1>}
        <RecommendedMovies data={data} isLoading={isLoading} isError={isError} error={error}/>
        <TrendMovies data={data} isLoading={isLoading} isError={isError} error={error}/>
        <Series data={data} isLoading={isLoading} isError={isError} error={error}/>
      </body>
     );
}
 
export default DashBoardBody;