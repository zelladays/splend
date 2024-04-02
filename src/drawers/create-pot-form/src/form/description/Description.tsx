import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../utils";

export const Description = ({ register, errors }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_700} color={colors.text_primary}>
        Description
      </Text>
      <Textarea
        id="description"
        {...register("description", { required: "Required field" })}
        borderRadius={4}
        borderWidth={0}
        color={colors.text_primary}
        placeholder="Add a description..."
        resize="none"
        focusBorderColor={colors.brand_grey}
        pl={0}
        maxLength={255}
        _placeholder={{ color: hexToRGB(colors.text_primary, 0.25) }}
        _focus={{ bgColor: colors.brand_lightgrey, pl: "4" }}
        transition="all 0.1s ease-in-out"
      />
      {errors?.description ? (
        <Text {...textStyles.body3_700} color={colors.error} pt="1">
          {errors.description.message}
        </Text>
      ) : null}
    </Flex>
  );
};
