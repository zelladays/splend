import { Flex, Select, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";

const COLLECTIONS = [
  { label: "Vacation", id: "vacation" },
  { label: "Driving", id: "driving" },
];

export const Collection = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_400} color="white">
        Add to collection
      </Text>
      <Select
        id="collection"
        {...register("collection")}
        bgColor="white"
        borderRadius={4}
        placeholder="Search for collection..."
        noOfLines={5}
        _placeholder={{ color: colors.grayLight }}
      >
        {COLLECTIONS.map((collection) => (
          <option value={collection.id}>{collection.label}</option>
        ))}
      </Select>
    </Flex>
  );
};
