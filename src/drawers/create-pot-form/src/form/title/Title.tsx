import { Flex, Input, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";

export const Title = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_400} color="white">
        Title
      </Text>
      <Input
        id="title"
        {...register("title")}
        bgColor="white"
        borderRadius={4}
        placeholder="Enter the name of your pot..."
        _placeholder={{ color: colors.grayLight }}
      />
    </Flex>
  );
};
