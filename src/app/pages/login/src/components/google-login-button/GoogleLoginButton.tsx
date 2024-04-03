import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { useTheme } from "../../../../../App";
import { useAuthenticationContext } from "../../../../../../shared/utils/src";
import { baseFetcher } from "../../../../../../libs/data-access/src/baseFetcher";

export const GoogleLoginButton: React.FC = () => {
  const { textStyles, colors } = useTheme();
  const { logIn } = useAuthenticationContext();

  const login = useGoogleLogin({
    redirect_uri: `${window.location.origin}`,
    onSuccess: async (success) => {
      await baseFetcher("/auth").post({ code: success.code });
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
