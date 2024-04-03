import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { DrawerContextProvider } from "../../../../../shared/utils/src";
import axios from "axios";
import { SplendNavigationPanel } from "../../../../../libs/feature-splend-navigation-panel";
import { DashboardSummary } from "../../../../../libs/feature-dashboard-summary";
import { DashboardFavourites } from "../../../../../libs/feature-dashboard-favourites-list";
import { CreatePotDrawer } from "../../../../../libs/form-create-pot";

export const DashboardScreen: React.FC = () => {
  const form = useForm();

  const [profile, setProfile] = React.useState(null);
  const [_, setPots] = React.useState([] as any[]);

  React.useEffect(() => {
    async function getProfile() {
      console.log("getting profile!");
      await axios
        .get(`${process.env.REACT_APP_SPLEND_SERVICE}/profile`, {
          withCredentials: true,
        })
        .then((res) => setProfile(res.data));
    }

    async function getPots() {
      console.log("getting pots");
      await axios
        .get(`${process.env.REACT_APP_SPLEND_SERVICE}/pots`, {
          withCredentials: true,
        })
        .then((res) => setPots(res.data));
    }

    getProfile().catch((err) => console.error(err));
    getPots().catch((err) => console.error(err));
  }, []);

  console.log({ profile });

  return (
    <FormProvider {...form}>
      <DrawerContextProvider>
        <Flex flex={1} position="relative" ml="232px">
          <Box position="fixed" top={0} left={0}>
            <SplendNavigationPanel selectedTab="dashboard" />
          </Box>

          <Flex p="32px 32px 0 0" width="100%">
            <Flex flexDirection="column" minHeight="90vh" width="100%">
              <DashboardSummary />
              <Flex p="8" flexDirection="column" gap="8">
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
