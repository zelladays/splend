import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { SummaryCard } from "../../../../../ui";

export const DashboardSummary = React.memo(() => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex p="8" flexDirection="column" gap="8">
      <Flex flexDirection="column">
        <Text {...textStyles.body3_400} color="rgba(175, 175, 175, 0.5)">
          It's time to Splend!
        </Text>
        <Text {...textStyles.h1} color={colors.text_primary}>
          Dashboard
        </Text>
      </Flex>
      <Flex gap="6">
        <SummaryCard
          title="Saving Interval"
          figure="£1,200/month"
          description="Frequency of amount saved"
        />
        <SummaryCard
          title="Current Savings"
          figure="£4,500"
          description="Savings currently in possession"
        />
        <SummaryCard
          title="Lifetime Savings"
          figure="£14,950"
          description="All-time record of amount saved"
        />
      </Flex>
    </Flex>
  );
});
