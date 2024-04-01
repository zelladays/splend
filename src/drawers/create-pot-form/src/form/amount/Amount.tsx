import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../utils";
import * as React from "react";
import { useWatch } from "react-hook-form";

export const Amount = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const amountValue = useWatch({ name: "amount" });

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_700} color={colors.text_primary}>
        Saving goal
      </Text>
      <InputGroup>
        {amountValue ? (
          <InputLeftElement
            pointerEvents="none"
            ml={isFocused ? 0 : -4}
            left={0}
            color={hexToRGB(colors.text_primary, 0.25)}
            transition="all 0.1s ease-in-out"
          >
            <Text
              {...textStyles.body2_400}
              color={hexToRGB(colors.text_primary, 0.25)}
            >
              £
            </Text>
          </InputLeftElement>
        ) : null}
        <Input
          type="number"
          placeholder="Enter the goal to save for this pot..."
          id="amount"
          {...register("amount", { required: true })}
          borderRadius={4}
          borderWidth={0}
          pl={amountValue ? "4" : 0}
          color={colors.text_primary}
          focusBorderColor={colors.brand_grey}
          {...textStyles.body2_400}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          _placeholder={{ color: hexToRGB(colors.text_primary, 0.25) }}
          _focus={{
            bgColor: colors.brand_lightgrey,
            pl: amountValue ? "8" : "4",
          }}
          transition="all 0.1s ease-in-out"
        />
      </InputGroup>
    </Flex>
  );
};
