import { Flex } from "@chakra-ui/react";
import { NavBarItem } from "../nav-bar-item";
import { useTheme } from "../../../../../app/App";
import { Logo } from "../logo";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const SplendNavigationPanel = React.memo(
  ({ selectedTab }: { selectedTab: string }) => {
    const { colors } = useTheme();
    const navigate = useNavigate();

    const handleNavigateHome = React.useCallback(() => {
      navigate("/dashboard");
    }, [navigate]);

    return (
      <Flex
        flexDirection="column"
        py="8"
        px="4"
        bgColor={colors.brand_dark_grey}
        height="100vh"
        justifyContent="space-between"
      >
        <Flex flexDirection="column" gap="3">
          <Flex as="button" p="8" onClick={handleNavigateHome}>
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
        <NavBarItem
          tabId="settings"
          label="Settings"
          icon="cog"
          selectedTabId={selectedTab}
        />
      </Flex>
    );
  }
);
