import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../..";

type Amount = {
  currency: string;
  amount: number;
  decimalPlaces: number;
};

type PotAmount = {
  progress: Amount;
  goal: Amount;
};

type PotItemProps = {
  potName: string;
  potAmount: PotAmount;
};

export const PotItem = React.memo(({ potName, potAmount }: PotItemProps) => {
  const { textStyles, colors } = useTheme();

  const potProgressPercentage = React.useMemo(() => {
    return (100 * potAmount.progress.amount) / potAmount.goal.amount;
  }, [potAmount.goal.amount, potAmount.progress.amount]);

  return (
    <button>
      <Flex
        alignItems="center"
        flexDirection="column"
        borderWidth={1}
        borderColor={colors.white}
        borderRadius="4px"
      >
        <Flex background={colors.greenDark} px="6" py="2">
          <Text {...textStyles.body2_700} color={colors.white}>
            {potName}
          </Text>
        </Flex>
        <Flex
          width="100%"
          py="4"
          px="8"
          position="relative"
          borderTopWidth={1}
          borderColor={colors.white}
        >
          <Flex
            position="absolute"
            height="100%"
            left={0}
            top={0}
            width={`${potProgressPercentage}%`}
            background={colors.white}
            zIndex={-1}
          />
        </Flex>
      </Flex>
    </button>
  );
});
