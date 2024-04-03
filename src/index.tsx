import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from "./utils/reportWebVitals";
import * as serviceWorker from "./utils/serviceWorker";
import {
  Box,
  ChakraProvider,
  useTheme as useChakraTheme,
} from "@chakra-ui/react";
import {
  theme,
  themeValues,
  AuthenticationContextProvider,
  useAuthenticationContext,
} from "./utils";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationRouter } from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const useTheme = (): typeof themeValues => {
  return useChakraTheme();
};

const Splend = () => {
  const { isLoggedIn } = useAuthenticationContext();

  if (!GOOGLE_CLIENT_ID) {
    return <div>Missing ENV</div>;
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChakraProvider theme={theme}>
          <Router>
            <Box width="100vw">
              <NavigationRouter loggedIn={isLoggedIn} />
            </Box>
          </Router>
        </ChakraProvider>
      </React.Suspense>
    </GoogleOAuthProvider>
  );
};

export const App = () => {
  return (
    <AuthenticationContextProvider>
      <Splend />
    </AuthenticationContextProvider>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
