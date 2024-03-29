import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

import { HomeNavBar, HomeDescription, HomePotSummary } from "../components";
import { SearchBar } from "../../../../ui";

export const HomeScreen: React.FC = () => {
  return (
    <Flex flex={1} mt="8" ml="8" gap="8">
      <Box position="sticky" top={0} left={0}>
        <HomeNavBar />
      </Box>

      <Flex flexDirection="column">
        <SearchBar />
      </Flex>
    </Flex>
  );
};
