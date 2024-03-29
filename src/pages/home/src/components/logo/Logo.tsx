import { Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";

export const Logo: React.FC = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex
      p="3"
      borderWidth={2}
      borderColor={colors.white}
      borderRadius={8}
      pointerEvents="none"
      justifyContent="center"
      alignSelf="center"
    >
      <Heading {...textStyles.h3} color={colors.white}>
        Splend
      </Heading>
    </Flex>
  );
};
