import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { HomeScreen, LoginScreen } from "../pages";

export function NavigationRouter({ loggedIn }: { loggedIn: boolean }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={loggedIn ? <Navigate replace to="/home" /> : <LoginScreen />}
        />
        <Route
          path="/home"
          element={loggedIn ? <HomeScreen /> : <Navigate replace to="/login" />}
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}
