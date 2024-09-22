import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
import DashboardNavigation from "./dashboardNav";
const NetFlixDashBoard = () => {
  return (
   <div className="mt-4">
     <DashboardNavigation/>
    <div className=' my-14 sm:my-16 space-y-20 text-white'>
      <RecommendedMovies/>
      <TrendMovies/>
      <Series/>
    </div>
   </div>
  );
};

export default NetFlixDashBoard;