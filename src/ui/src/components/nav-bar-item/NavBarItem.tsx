import * as React from "react";
import { Icons, SvgIcon } from "../../../../assets";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../..";

type NavBarItemProps = {
  tabId: string;
  label: string;
  icon: keyof typeof Icons;
  selectedTabId: string;
  onClick?: () => void;
};

export const NavBarItem = React.memo(
  ({ tabId, label, icon, selectedTabId, onClick }: NavBarItemProps) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const { colors, textStyles } = useTheme();

    const tabIsSelected = React.useMemo(
      () => selectedTabId === tabId,
      [selectedTabId, tabId]
    );

    return (
      <button onClick={onClick}>
        <Flex
          px="4"
          py="2"
          gap="4"
          alignItems="center"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          bgColor={
            isHovering || tabIsSelected ? colors.brand_lightgrey : undefined
          }
          _hover={!tabIsSelected ? { pl: "8" } : undefined}
          borderRadius={8}
          transition="all 0.3s ease"
        >
          <SvgIcon icon={icon} iconColor="white" size={16} />
          <Text color={colors.white} {...textStyles.body2_700}>
            {label}
          </Text>
        </Flex>
      </button>
    );
  }
);
