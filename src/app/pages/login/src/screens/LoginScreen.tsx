import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { GoogleLoginButton, SplashLogo } from "../components";
import { useTheme } from "../../../../App";
import { hexToRGB } from "../../../../../shared/utils";
import { ImgIcon } from "../../../../../shared/assets";

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
          <Flex
            flex={1}
            height="100%"
            p="8"
            borderRadius={16}
            bgColor={colors.brand_accent}
            flexDirection="column"
            alignItems="center"
            position="relative"
            overflow="hidden"
            pointerEvents="auto"
            transition="all 0.2s ease"
            _hover={{
              filter: "drop-shadow(0 0 4px rgba(61, 102, 249, 1))",
            }}
          >
            <Text {...textStyles.body1_700} color={colors.text_primary}>
              Manage
            </Text>
            <Text {...textStyles.body1_700} color={colors.text_primary}>
              How You
            </Text>
            <Text {...textStyles.body1_700} color={colors.text_primary}>
              Spend Your
            </Text>
            <Text {...textStyles.body1_700} color={colors.text_primary}>
              Savings With
            </Text>
            <Text {...textStyles.body1_700} color={colors.text_primary}>
              Splend
            </Text>
            <ImgIcon
              image="bee-money"
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              filter="blur(4px)"
              transform="scale(2)"
              opacity={0.2}
              pointerEvents="none"
            />
          </Flex>
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
