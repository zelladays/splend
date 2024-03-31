import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

import {
  NavigationPanel,
  DashboardActionButtons,
  DashboardSummary,
  DashboardFavourites,
} from "../components";
import { CreatePotDrawer } from "../../../../drawers";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContextProvider } from "../../../../utils";

export const HomeScreen: React.FC = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <DrawerContextProvider>
        <Flex flex={1} position="relative" ml="232px">
          <Box position="fixed" top={0} left={0}>
            <NavigationPanel selectedTab="dashboard" />
          </Box>

          <Flex p="32px 32px 32px 0" width="100%">
            <Flex
              flexDirection="column"
              borderRadius="16px"
              bgColor="white"
              width="100%"
            >
              <DashboardSummary />
              <Flex p="8" flexDirection="column" gap="8">
                <DashboardActionButtons />
                <DashboardFavourites />
              </Flex>
            </Flex>
          </Flex>

          <CreatePotDrawer />
        </Flex>
      </DrawerContextProvider>
    </FormProvider>
  );
};
