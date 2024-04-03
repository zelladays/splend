import { Flex } from "@chakra-ui/react";

export const HDivider = ({ color }: { color: string }) => {
  return <Flex flex={1} height="1px" background={color} />;
};
