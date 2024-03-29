import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { SvgIcon } from "../../../../../assets";
import { gradients } from "../../../../../utils";

export const HomeActionButtons = () => {
  const { textStyles } = useTheme();

  return (
    <Flex gap="6">
      <Flex
        as="button"
        py="64px"
        px="8"
        borderRadius={8}
        background={`linear-gradient(to right, ${gradients.green.start}, ${gradients.green.end})`}
        boxShadow="0px 0px 1px #FFFFFF"
        gap="4"
      >
        <SvgIcon icon="pot" color="white" />
        <Text color="white" {...textStyles.h3}>
          Create Splend Pot
        </Text>
      </Flex>

      <Flex
        as="button"
        py="64px"
        px="8"
        borderRadius={8}
        background={`linear-gradient(to right, ${gradients.orange.start}, ${gradients.orange.end})`}
        boxShadow="0px 0px 1px #FFFFFF"
        gap="4"
      >
        <SvgIcon icon="pot" color="white" />
        <Text color="white" {...textStyles.h3}>
          Create Splend Collection
        </Text>
      </Flex>
    </Flex>
  );
};
