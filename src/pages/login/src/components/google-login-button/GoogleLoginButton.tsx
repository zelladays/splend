import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";
import { useAuthenticationContext } from "../../../../../utils";

export const GoogleLoginButton: React.FC = () => {
  const { textStyles, colors } = useTheme();
  const { logIn } = useAuthenticationContext();

  return (
    <button onClick={logIn}>
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
