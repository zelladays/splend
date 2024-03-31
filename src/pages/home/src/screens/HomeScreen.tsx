import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

import { HomeNavBar, HomeActionButtons } from "../components";
import { SearchBar } from "../../../../ui";
import { useTheme } from "../../../..";
import { CreatePotDrawer } from "../../../../drawers";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContextProvider } from "../../../../utils";

export const HomeScreen: React.FC = () => {
  const form = useForm();

  const { textStyles } = useTheme();
  return (
    <FormProvider {...form}>
      <DrawerContextProvider>
        <Flex flex={1} gap="8" position="relative">
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
      </DrawerContextProvider>
    </FormProvider>
  );
};
