import { Flex, Text, useToast } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../../app/App";
import { PotItem } from "../../../../data-access-types";
import { PotCard } from "../../../../../shared/ui";
import useSWR from "swr";
import { baseFetcher } from "../../../../data-access";

const NoPotPlaceholder = React.memo(() => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Text {...textStyles.body1_400} color={colors.text_primary}>
        You have no favourites yet
      </Text>
      <Text {...textStyles.body3_400} color={colors.text_primary}>
        Any starred pots will appear here
      </Text>
    </Flex>
  );
});

export const DashboardFavourites = React.memo(() => {
  const { data } = useSWR("/pots", (url) => baseFetcher(url).get());
  const { textStyles, colors } = useTheme();
  const pots = localStorage.getItem("pots");
  const toast = useToast();

  const potItems: PotItem[] = React.useMemo(
    () => (pots ? JSON.parse(pots) : []),
    [pots]
  );

  const handleDelete = React.useCallback(
    (id: string) => {
      // @TODO
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
        {data?.length === 0 ? (
          <NoPotPlaceholder />
        ) : (
          // @ts-ignore
          data?.map((pot) => (
            <PotCard
              potId={pot.id}
              key={pot.id}
              potName={pot.title}
              potAmount={{
                goal: pot.savingGoal,
                progress: pot.currentAmountSaved,
              }}
              onDeleteClick={handleDelete}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
});
