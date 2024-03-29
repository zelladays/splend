import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";

export const Amount = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_400} color="white">
        Saving goal
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color={colors.grayLight}>
          £
        </InputLeftElement>
        <Input
          type="number"
          placeholder="Enter the goal to save for this pot..."
          id="amount"
          {...register("amount")}
          bgColor="white"
          borderRadius={4}
          _placeholder={{ color: colors.grayLight }}
        />
      </InputGroup>
    </Flex>
  );
};
