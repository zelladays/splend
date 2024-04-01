import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../..";
import { hexToRGB } from "../../../../utils";

type SummaryCardProps = {
  title: string;
  figure: string;
  description: string;
};

export const SummaryCard = React.memo(
  ({ title, figure, description }: SummaryCardProps) => {
    const { textStyles, colors } = useTheme();

    return (
      <Flex
        as="button"
        px="8"
        py="3"
        borderColor={hexToRGB(colors.text_primary, 0.25)}
        borderWidth="1px"
        borderRadius={8}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1"
        transition="all 0.2s ease-in-out"
        position="relative"
        cursor="cell"
        _hover={{ bgColor: hexToRGB(colors.text_primary, 0.1) }}
      >
        <Text {...textStyles.body2_400} color={colors.text_primary}>
          {title}
        </Text>
        <Text {...textStyles.body1_700} color={colors.text_primary}>
          {figure}
        </Text>
        <Text {...textStyles.body4_400} color={colors.text_primary}>
          {description}
        </Text>
      </Flex>
    );
  }
);
