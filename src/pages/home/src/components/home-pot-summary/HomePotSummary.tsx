import * as React from "react";
import { PotItem } from "../../../../../ui";

export const HomePotSummary: React.FC = () => {
  return (
    <PotItem
      potId="summary"
      potName="Total savings collected"
      potAmount={{
        progress: { amount: 500, currency: "GBP", decimalPlaces: 2 },
        goal: { amount: 1000, currency: "GBP", decimalPlaces: 2 },
      }}
    />
  );
};
