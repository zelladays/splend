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
  potId: string;
  potName: string;
  potAmount: PotAmount;
};

export const PotItem = React.memo(
  ({ potId, potName, potAmount }: PotItemProps) => {
    const { textStyles, colors } = useTheme();

    const potProgressPercentage = React.useMemo(() => {
      return (100 * potAmount.progress.amount) / potAmount.goal.amount;
    }, [potAmount.goal.amount, potAmount.progress.amount]);

    return (
      <button>
        <Flex
          borderWidth={8}
          borderColor={colors.brand}
          borderRadius={8}
          py="4"
          px="8"
          position="relative"
        >
          <Flex
            position="absolute"
            height="100%"
            left={0}
            top={0}
            width={`${potProgressPercentage}%`}
            bgColor={colors.brand}
            zIndex={-1}
          />
          <Text {...textStyles.body2_700} color={colors.error}>
            {potName}
          </Text>
        </Flex>
      </button>
    );
  }
);
