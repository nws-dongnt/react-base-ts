import { useAppSelector } from "reduxx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Path from "./Path";

type AuthRouteProps = {
  fallback?: string;
};

export default function AuthRoute({ fallback = Path.login }: AuthRouteProps) {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return (
      <Navigate
        to={fallback}
        state={{ redirectTo: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
}
