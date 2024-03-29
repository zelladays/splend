import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

import { HomeNavBar, HomeDescription, HomePotSummary } from "../components";

export const HomeScreen: React.FC = () => {
  return (
    <Flex flex={1}>
      <Box position="sticky" top={0} left={0} mt="8" ml="8">
        <HomeNavBar />
      </Box>

      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        mt="200px"
        flexDirection="column"
        gap="4"
      >
        <HomeDescription currency="£" amount={500} interval="month" />
        <HomePotSummary />
      </Flex>
    </Flex>
  );
};
