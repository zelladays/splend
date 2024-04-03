import React, { createContext } from "react";

type AuthenticationContextProps = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const AuthenticationContext =
  createContext<AuthenticationContextProps | null>(null);

export const AuthenticationContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthenticationContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const value = React.useContext(AuthenticationContext);

  if (!value) {
    throw new Error(
      "Missing AuthenticationContextProvider: Please wrap in this provider."
    );
  }

  return value;
};
