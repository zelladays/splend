import { Flex } from "@chakra-ui/react";
import { NavBarItem } from "../../../../../ui";
import { useTheme } from "../../../../..";
import { Logo } from "../logo";

export const HomeNavBar: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection="column"
      gap="3"
      p="8"
      bgColor={colors.brandSecondary}
      borderRadius={8}
    >
      <Logo />
      <NavBarItem label="Dashboard" icon="profile" />
      <NavBarItem label="Groups" icon="profile" />
      <NavBarItem label="History" icon="profile" />
    </Flex>
  );
};
