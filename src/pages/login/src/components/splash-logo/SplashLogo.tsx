import * as React from "react";
import { useTheme } from "../../../../..";
import { Flex, Heading } from "@chakra-ui/react";

export const SplashLogo: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex
      px="8"
      borderWidth={3}
      borderColor={colors.white}
      borderRadius={8}
      pointerEvents="none"
    >
      <Heading {...textStyles.h1} color={colors.white}>
        Splend
      </Heading>
    </Flex>
  );
};
