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
        p="8"
        bgColor={colors.brandSecondary}
        borderRadius={8}
        height="80vh"
        boxShadow="0px 0px 2px #FFF"
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
