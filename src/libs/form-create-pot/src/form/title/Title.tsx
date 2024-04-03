import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../../app/App";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../shared/utils/src";

export const Title = ({ register, errors }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <FormControl flexDirection="column" gap="1">
      <FormLabel {...textStyles.body2_700} color={colors.text_primary}>
        Title
      </FormLabel>
      <Input
        id="title"
        {...register("title", { required: "Required field" })}
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
      {errors?.title ? (
        <Text {...textStyles.body3_700} color={colors.error} pt="1">
          {errors.title.message}
        </Text>
      ) : null}
    </FormControl>
  );
};
