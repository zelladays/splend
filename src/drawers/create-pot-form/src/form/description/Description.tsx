import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";

export const Description = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_400} color="white">
        Description
      </Text>
      <Textarea
        id="description"
        {...register("description")}
        bgColor="white"
        borderRadius={4}
        placeholder="Add a description..."
        noOfLines={5}
        _placeholder={{ color: colors.grayLight }}
      />
    </Flex>
  );
};
