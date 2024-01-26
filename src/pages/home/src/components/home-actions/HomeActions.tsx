import { Flex } from "@chakra-ui/react";
import { ActionItem } from "../../../../../ui";

export const HomeActions: React.FC = () => {
  return (
    <Flex flexDirection="column" gap="4" flexShrink={1} alignItems="flex-end">
      <ActionItem label="Profile" asset="profile" onClick={() => {}} />
      <ActionItem label="Settings" asset="cog" onClick={() => {}} />
      <ActionItem label="New pot" asset="add-pot" onClick={() => {}} />
    </Flex>
  );
};
