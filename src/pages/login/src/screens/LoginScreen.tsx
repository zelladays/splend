import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { GoogleLoginButton, SplashLogo } from "../components";
import { useTheme } from "../../../..";

export const LoginScreen: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex height="100vh">
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          gap="8"
          px="8"
          py="16"
          borderRadius={32}
          bgColor="rgba(0, 0, 0, 0.2)"
          alignItems="center"
          flexDirection="column"
        >
          <SplashLogo />
          <Text {...textStyles.h2} color={colors.white}>
            Get insights into your saving goals.
          </Text>
          <GoogleLoginButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
