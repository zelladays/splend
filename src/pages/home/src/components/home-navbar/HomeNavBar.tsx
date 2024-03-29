import { Flex } from "@chakra-ui/react";
import { ActionItem } from "../../../../../ui";
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
      <ActionItem label="Profile" asset="profile" onClick={() => {}} />
      <ActionItem label="Settings" asset="cog" onClick={() => {}} />
      <ActionItem label="New pot" asset="add-pot" onClick={() => {}} />
    </Flex>
  );
};
