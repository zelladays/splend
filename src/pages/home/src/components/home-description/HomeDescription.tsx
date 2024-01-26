import { Flex, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";

export const HomeDescription: React.FC = () => {
  const { textStyles, colors } = useTheme();
  const amount = "£9,999,999";
  const interval = "month";
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading {...textStyles.h1} color={colors.white}>
        Hey Lucky!
      </Heading>
      <Flex flexDirection="row" alignItems="baseline" gap="4">
        <Text {...textStyles.body3_400} color={colors.white}>
          You are saving:
        </Text>
        <Text {...textStyles.body3_700} color={colors.white}>
          {amount}/{interval}
        </Text>
      </Flex>
    </Flex>
  );
};
