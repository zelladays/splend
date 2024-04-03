import { Navigate, Route } from "react-router-dom";
import { useAuthenticationContext } from "../../../shared/utils/src";
import { LoginScreen } from "../../pages";

export const LoginRoute = () => {
  const { isLoggedIn } = useAuthenticationContext();

  return (
    <Route
      path="/login"
      element={
        isLoggedIn ? <Navigate replace to="/dashboard" /> : <LoginScreen />
      }
    />
  );
};
