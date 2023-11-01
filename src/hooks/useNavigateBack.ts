import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = useCallback(
    (path: string, replace = true) => {
      if (location.state && location.state.pathname === path) {
        navigate(-1);
        return;
      }
      navigate(path, { replace });
    },
    [location, navigate],
  );

  return goBack;
};

export default useNavigateBack;
