import { Flex, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";

type HomeDescriptionProps = {
  amount: number;
  currency: string;
  interval: string;
};

export const HomeDescription = ({
  interval,
  amount,
  currency,
}: HomeDescriptionProps) => {
  const { textStyles, colors } = useTheme();

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
          {currency}
          {amount}/{interval}
        </Text>
      </Flex>
    </Flex>
  );
};
