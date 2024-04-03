import { Flex } from "@chakra-ui/react";

export const VDivider = ({ color }: { color: string }) => {
  return <Flex width="1px" flex={1} background={color} />;
};
