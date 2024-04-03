import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { SummaryCard } from "../summary-card";
import { DashboardHeader } from "../dashboard-header";

export const DashboardSummary = React.memo(() => {
  return (
    <Flex p="8" flexDirection="column" gap="8">
      <DashboardHeader />
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
