import * as React from "react";
import { Icons } from "../../../../assets";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../..";

type NavBarItemProps = {
  label: string;
  icon: keyof typeof Icons;
};

export const NavBarItem = React.memo(({ label, icon }: NavBarItemProps) => {
  const { colors, textStyles } = useTheme();
  const Icon = Icons[icon];

  return (
    <Flex px="4" py="2" gap="4" alignItems="center">
      <Icon color="white" />
      <Text color={colors.white} {...textStyles.body2_700}>
        {label}
      </Text>
    </Flex>
  );
});
