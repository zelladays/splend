import { Navigate, Route } from "react-router-dom";
import { DashboardScreen } from "../../pages";
import { useAuthenticationContext } from "../../../shared/utils/src";

export const DashboardRoute = () => {
  const { isLoggedIn } = useAuthenticationContext();

  return (
    <Route
      path="/dashboard"
      element={
        isLoggedIn ? <DashboardScreen /> : <Navigate replace to="/login" />
      }
    />
  );
};
