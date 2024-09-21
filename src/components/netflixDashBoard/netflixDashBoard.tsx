import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
const NetFlixDashBoard = () => {
  return (
    <div className=' my-28 space-y-20 text-white'>
      <RecommendedMovies/>
      <TrendMovies/>
      <Series/>
    </div>
  );
};

export default NetFlixDashBoard;