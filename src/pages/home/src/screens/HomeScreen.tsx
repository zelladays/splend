import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

import { HomeNavBar, HomeActionButtons } from "../components";
import { useTheme } from "../../../..";
import { CreatePotDrawer } from "../../../../drawers";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContextProvider } from "../../../../utils";

export const HomeScreen: React.FC = () => {
  const form = useForm();

  const { textStyles, colors } = useTheme();
  return (
    <FormProvider {...form}>
      <DrawerContextProvider>
        <Flex flex={1} position="relative">
          <Box position="sticky" top={0} left={0}>
            <HomeNavBar selectedTab="dashboard" />
          </Box>

          <Flex p="32px 32px 32px 0" width="100%">
            <Flex
              flexDirection="column"
              borderRadius="16px 16px 0 0"
              bgColor="white"
              width="100%"
            >
              <Flex
                borderRadius="16px 16px 0 0"
                p="8"
                flexDirection="column"
                bgColor={colors.grayLight}
              >
                <Text {...textStyles.body3_400} color="rgba(0, 0, 0, 0.5)">
                  It's time to Splend!
                </Text>
                <Text {...textStyles.h1} color={colors.brand_grey}>
                  Dashboard
                </Text>
              </Flex>
              <Flex p="8">
                <HomeActionButtons />
              </Flex>
            </Flex>
          </Flex>

          <CreatePotDrawer />
        </Flex>
      </DrawerContextProvider>
    </FormProvider>
  );
};
