import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import axios from "axios";

import { useGoogleLogin } from "@react-oauth/google";
import { useTheme } from "../../../../..";
import { useAuthenticationContext } from "../../../../../utils";

export const GoogleLoginButton: React.FC = () => {
  const { textStyles, colors } = useTheme();
  const { logIn } = useAuthenticationContext();

  const login = useGoogleLogin({
    onSuccess: async (success) => {
      await axios.post(
        `${process.env.REACT_APP_SPLEND_SERVICE}/auth`,
        {
          code: success.code,
        },
        { withCredentials: true }
      );
      logIn();
    },
    flow: "auth-code",
  });

  return (
    <button onClick={login}>
      <Flex
        bgColor={colors.white}
        px="4"
        py="2"
        borderRadius={8}
        alignItems="center"
        gap="2.5"
      >
        <Text {...textStyles.body2_700} color={colors.darkBrand}>
          Access your Splend!
        </Text>
      </Flex>
    </button>
  );
};
