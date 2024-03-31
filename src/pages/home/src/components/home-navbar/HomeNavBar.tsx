import { Flex } from "@chakra-ui/react";
import { NavBarItem } from "../../../../../ui";
import { useTheme } from "../../../../..";
import { Logo } from "../logo";
import * as React from "react";

export const HomeNavBar = React.memo(
  ({ selectedTab }: { selectedTab: string }) => {
    const { colors } = useTheme();

    return (
      <Flex
        flexDirection="column"
        gap="3"
        py="8"
        px="4"
        bgColor={colors.brand_grey}
        height="100vh"
        boxShadow="0px 0px 3px rgba(255, 255, 255, 0.2)"
      >
        <Flex p="8">
          <Logo />
        </Flex>

        <NavBarItem
          tabId="dashboard"
          label="Dashboard"
          icon="dashboard"
          selectedTabId={selectedTab}
        />
        <NavBarItem
          tabId="groups"
          label="Groups"
          icon="groups"
          selectedTabId={selectedTab}
        />
        <NavBarItem
          tabId="history"
          label="History"
          icon="history"
          selectedTabId={selectedTab}
        />
      </Flex>
    );
  }
);
