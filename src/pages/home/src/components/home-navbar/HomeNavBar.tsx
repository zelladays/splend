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
      height="80vh"
    >
      <Flex p="8">
        <Logo />
      </Flex>

      <NavBarItem label="Dashboard" icon="dashboard" />
      <NavBarItem label="Groups" icon="groups" />
      <NavBarItem label="History" icon="history" />
    </Flex>
  );
};
