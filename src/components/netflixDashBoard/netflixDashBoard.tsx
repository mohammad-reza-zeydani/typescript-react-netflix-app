import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
import DashboardNavigation from "./dashboardNav";
import useGetMovies from "../../hooks/useGetMovies";
import { useMyContext } from "../context/context";
const NetFlixDashBoard = () => {
  const {search}=useMyContext()
  // destructure useGetMovies hook
  const {data,isLoading,isError,error}=useGetMovies(search)
  return (
   <div className="mt-4">
     <DashboardNavigation/>      
     {/* dashboard body */}
    <body className=' my-14 sm:my-16 space-y-20 text-white'>
      {/* showing search result by data length */}
    {search.length !==0 &&  <h1 className="text-center text-white text-4xl lg:text-5xl">search result = {data && data.length}</h1>}
      <RecommendedMovies data={data} isLoading={isLoading} isError={isError} error={error}/>
      <TrendMovies data={data} isLoading={isLoading} isError={isError} error={error}/>
      <Series data={data} isLoading={isLoading} isError={isError} error={error}/>
    </body>
   </div>
  );
};

export default NetFlixDashBoard;