import DashboardNavigation from "./dashboardNav";
import DashBoardBody from "./dashBoardBody/dashBoardBody";
const NetFlixDashBoard = () => {
  return (
   <div className="mt-4">
    {/* dashboard navigation */}
     <DashboardNavigation/>      
     {/* dashboard body */}
     <DashBoardBody/>
   </div>
  );
};

export default NetFlixDashBoard;