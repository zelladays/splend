import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { GoogleLoginButton, SloganCard } from "../components";
import { useTheme } from "../../../../App";
import { hexToRGB } from "../../../../../shared/utils";

export const LoginScreen: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex height="100vh" position="relative">
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          gap="8"
          px="3"
          py="3"
          width="50vw"
          flexShrink={2}
          borderRadius={16}
          bgColor={colors.brand_grey}
          flexDirection="row"
          justifyContent="space-between"
          filter={`drop-shadow(0px 0px 100px ${hexToRGB(
            colors.brand_accent,
            0.1
          )})`}
        >
          <SloganCard />
          <Flex
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="4"
          >
            <Flex flexDirection="column" alignItems="center" gap="2">
              <Text {...textStyles.body1_700} color={colors.text_primary}>
                Get Started Now
              </Text>
              <Text {...textStyles.body3_400} color={colors.text_secondary}>
                Enter your credentials to access your Splend account
              </Text>
            </Flex>
            <GoogleLoginButton />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
