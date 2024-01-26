import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";

export const Logo: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex
      px="3"
      py="1"
      borderWidth={3}
      borderColor={colors.brand}
      borderRadius={8}
      pointerEvents="none"
    >
      <Text {...textStyles.body2_700} color={colors.brand}>
        Splend
      </Text>
    </Flex>
  );
};
