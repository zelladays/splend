import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";
import { PotItem } from "../../../../../libs/data-access-types";
import { PotCard } from "../../../../../ui";

export const DashboardFavourites = React.memo(() => {
  const { textStyles, colors } = useTheme();
  const pots = localStorage.getItem("pots");
  const potItems: PotItem[] = pots ? JSON.parse(pots) : [];

  return (
    <Flex flexDirection="column" gap="3">
      <Text {...textStyles.h2} color={colors.brand_grey}>
        Favourites
      </Text>
      <Flex flexWrap="wrap" width="100%" gap="6">
        {potItems.map((pot) => (
          <PotCard
            key={pot.id}
            potName={pot.title}
            potAmount={{ goal: pot.amount, progress: 0 }}
          />
        ))}
      </Flex>
    </Flex>
  );
});
