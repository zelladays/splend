import { Flex, Input, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../utils";

export const Title = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_700} color={colors.text_primary}>
        Title
      </Text>
      <Input
        id="title"
        {...register("title", { required: true })}
        borderRadius={4}
        borderWidth={0}
        color={colors.text_primary}
        placeholder="Enter the name of your pot..."
        focusBorderColor={colors.brand_grey}
        pl={0}
        _placeholder={{ color: hexToRGB(colors.text_primary, 0.25) }}
        _focus={{ bgColor: colors.brand_lightgrey, pl: "4" }}
        transition="all 0.1s ease-in-out"
      />
    </Flex>
  );
};
