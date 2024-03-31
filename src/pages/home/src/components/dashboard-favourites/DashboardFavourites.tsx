import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { PotItem } from "../../../../../ui";
import { useTheme } from "../../../../..";

export const DashboardFavourites = React.memo(() => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="3">
      <Text {...textStyles.h2} color={colors.brand_grey}>
        Favourites
      </Text>
      <Flex flexWrap="wrap" width="100%" gap="6">
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 900, progress: 700 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 250, progress: 10 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 400, progress: 380 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
        <PotItem
          potName="LoveHolidays booking to Greece"
          potAmount={{ goal: 2500, progress: 900 }}
        />
      </Flex>
    </Flex>
  );
});
