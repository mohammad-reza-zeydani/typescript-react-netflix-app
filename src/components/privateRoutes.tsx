import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  // we protect the routes at this component that we dont want user have access to unless the user is signed in
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
