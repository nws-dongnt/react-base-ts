import { useAppSelector } from "reduxx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Path from "./Path";

export default function UnAuthRoute() {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (user && location.pathname === Path.login) {
    const redirect = location.state?.redirectTo || Path.home;
    return (
      <Navigate
        to={redirect}
        state={{ redirectTo: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
}
