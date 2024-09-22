import RecommendedMovies from "./recommendedMovies";
import TrendMovies from "./trendMovies";
import Series from "./series";
import DashboardNavigation from "./dashboardNav";
const NetFlixDashBoard = () => {
  return (
   <div className="mt-8">
     <DashboardNavigation/>
    <div className=' my-12 sm:my-10 space-y-20 text-white'>
      <RecommendedMovies/>
      <TrendMovies/>
      <Series/>
    </div>
   </div>
  );
};

export default NetFlixDashBoard;