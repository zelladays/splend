import { Flex, Text, useToast } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../..";
import { PotItem } from "../../../../../libs/data-access-types";
import { PotCard } from "../../../../../ui";

const NoPotPlaceholder = React.memo(() => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Text {...textStyles.body1_400} color={colors.brand_grey}>
        You have no favourites yet
      </Text>
      <Text {...textStyles.body3_400} color={colors.brand_grey}>
        Add a pot to get started
      </Text>
    </Flex>
  );
});

export const DashboardFavourites = React.memo(() => {
  const { textStyles, colors } = useTheme();
  const pots = localStorage.getItem("pots");
  const toast = useToast();

  const potItems: PotItem[] = React.useMemo(
    () => (pots ? JSON.parse(pots) : []),
    [pots]
  );

  const handleDelete = React.useCallback(
    (id: string) => {
      const newPots = potItems.filter((pot) => pot.id !== id);
      localStorage.setItem("pots", JSON.stringify(newPots));
      toast({
        position: "top",
        title: "Pot deleted",
        status: "success",
        duration: 3000,
        isClosable: false,
      });
    },
    [potItems, toast]
  );

  return (
    <Flex flexDirection="column" gap="3">
      <Text {...textStyles.h2} color={colors.text_primary}>
        Favourites
      </Text>
      <Flex flexWrap="wrap" width="100%" gap="6">
        {potItems.length === 0 ? (
          <NoPotPlaceholder />
        ) : (
          potItems.map((pot) => (
            <PotCard
              potId={pot.id}
              key={pot.id}
              potName={pot.title}
              potAmount={{ goal: pot.amount, progress: 0 }}
              onDeleteClick={handleDelete}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
});
