import * as React from "react";
import { Icons } from "../../../../assets";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../..";

type NavBarItemProps = {
  label: string;
  icon: keyof typeof Icons;
  onClick?: () => void;
};

export const NavBarItem = React.memo(
  ({ label, icon, onClick }: NavBarItemProps) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const { colors, textStyles } = useTheme();
    const Icon = Icons[icon];

    return (
      <button onClick={onClick}>
        <Flex
          px="4"
          py="2"
          gap="4"
          alignItems="center"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          bgColor={isHovering ? colors.brandTertiary : undefined}
          borderRadius={8}
          transition="background-color 0.3s ease"
        >
          <Icon />
          <Text color={colors.white} {...textStyles.body2_700}>
            {label}
          </Text>
        </Flex>
      </button>
    );
  }
);
