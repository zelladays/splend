import * as React from "react";
import { useTheme } from "../../../../..";
import { Flex, Text } from "@chakra-ui/react";

export const SplashLogo: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex
      px="8"
      borderWidth={3}
      borderColor={colors.brand}
      borderRadius={8}
      pointerEvents="none"
    >
      <Text {...textStyles.h1} color={colors.brand}>
        Splend
      </Text>
    </Flex>
  );
};
