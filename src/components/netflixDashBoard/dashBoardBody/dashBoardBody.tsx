import useGetMovies from "../../../hooks/useGetMovies";
import { useMyContext } from "../../context/context";
import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
const DashBoardBody = () => {
  // we got searched words from context to pass it to our useGetMovies hook as search result
  const { search } = useMyContext();
  // destructure useGetMovies hook (we pass the properties as props to RecommendedMovies & TrendMovies & Series components)
  const { data, isLoading, isError, error } = useGetMovies(search);
  return (
    <div className=' my-14 sm:my-16 space-y-20 text-white bg-black'>
      {/* showing search result by data length */}
      {search.length !== 0 && (
        <h1 className='text-center text-white text-4xl lg:text-5xl'>
          search result = {data && data.length}
        </h1>
      )}
      {/* list of Recommended Movies*/}
      <RecommendedMovies
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      {/* list of Trend Movies*/}
      <TrendMovies
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      {/* list of Series */}
      <Series
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
};

export default DashBoardBody;
