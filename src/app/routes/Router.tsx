import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { DashboardScreen, LoginScreen } from "..";
import { Page } from "./Page";

export function NavigationRouter({ loggedIn }: { loggedIn: boolean }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate replace to="/dashboard" />
            ) : (
              <Page title="Splend - Login">
                <LoginScreen />
              </Page>
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            loggedIn ? (
              <Page title="Splend - Dashboard">
                <DashboardScreen />
              </Page>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}
