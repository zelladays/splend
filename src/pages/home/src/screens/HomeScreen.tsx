import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

import { HomeActions, HomeDescription, Logo } from "../components";

export const HomeScreen: React.FC = () => {
  return (
    <Flex flex={1}>
      <Box position="fixed" top={0} left={0} mt="8" ml="8">
        <Logo />
      </Box>

      <Box position="fixed" top={0} right={0} mt="8" mr="8">
        <HomeActions />
      </Box>

      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        mt="200px"
        flexDirection="column"
      >
        <HomeDescription />
      </Flex>
    </Flex>
  );
};
