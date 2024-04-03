import * as React from "react";
import { useTheme } from "../../../../../app/App";
import { Flex, Text } from "@chakra-ui/react";
type FigureProps = {
  figure: string;
  caption: string;
};

export const Figure = React.memo(({ figure, caption }: FigureProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column">
      <Text {...textStyles.body1_700} color={colors.pot_card_text}>
        {figure}
      </Text>
      <Text {...textStyles.body3_400} color={colors.pot_card_text}>
        {caption}
      </Text>
    </Flex>
  );
});
