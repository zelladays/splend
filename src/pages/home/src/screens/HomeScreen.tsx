import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

import { HomeNavBar, HomeActionButtons, CreatePotDrawer } from "../components";
import { SearchBar } from "../../../../ui";
import { useTheme } from "../../../..";

export const HomeScreen: React.FC = () => {
  const { textStyles } = useTheme();
  return (
    <Flex flex={1} mt="8" ml="8" gap="8" position="relative">
      <Box position="sticky" top={0} left={0}>
        <HomeNavBar selectedTab="dashboard" />
      </Box>

      <Flex flexDirection="column" gap="8">
        <Flex>
          <SearchBar />
        </Flex>
        <Flex flexDirection="column">
          <Text {...textStyles.h1} color="white">
            My Dashboard
          </Text>
          <HomeActionButtons />
        </Flex>
      </Flex>

      <CreatePotDrawer />
    </Flex>
  );
};
