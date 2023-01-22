import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ redirectPath = "/", isAuth }) => {
console.log(isAuth)
if (isAuth) {
  return <Navigate to={redirectPath} replace={true} />;
}

  return <Outlet/>;
};