import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";
import { Icons } from "../../../../../assets";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const GoogleLoginButton: React.FC = () => {
  const { textStyles, colors } = useTheme();
  const GoogleIcon = Icons.google;

  const login = useGoogleLogin({
    onSuccess: async (success) => {
      await axios.post(
        `${process.env.REACT_APP_SPLEND_SERVICE}/auth/google`,
        {
          code: success.code,
        },
        { withCredentials: true }
      );
      window.location.reload();
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
        <GoogleIcon />
        <Text {...textStyles.body2_700} color={colors.darkBrand}>
          Continue with Google
        </Text>
      </Flex>
    </button>
  );
};
