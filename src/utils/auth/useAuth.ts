import axios from "axios";
import * as React from "react";

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  async function verifyLoginState() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SPLEND_SERVICE}/auth/verify`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log({ response });
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    verifyLoginState();
  }, []);

  console.log({ loggedIn });

  return React.useMemo(
    () => ({
      loggedIn,
      verifyLoginState,
    }),
    [loggedIn]
  );
};
