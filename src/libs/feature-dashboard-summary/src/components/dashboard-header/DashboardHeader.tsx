import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../../app/App";
import { SplendTopBar } from "../../../../../shared/feature-splend-topbar";

export const DashboardHeader = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex justifyContent="space-between">
      <Flex flexDirection="column">
        <Text {...textStyles.h1} color={colors.text_primary}>
          Dashboard
        </Text>
      </Flex>

      <SplendTopBar />
    </Flex>
  );
};
