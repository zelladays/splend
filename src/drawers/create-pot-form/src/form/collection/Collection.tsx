import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../utils";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { AddIcon } from "@chakra-ui/icons";

const COLLECTIONS = [
  { label: "Vacation", id: "vacation" },
  { label: "Driving", id: "driving" },
];

export const Collection = ({ errors, register }: FormProps) => {
  const { textStyles, colors } = useTheme();
  const [value, setValue] = React.useState("");

  const form = useFormContext();

  const handleChange = React.useCallback(
    (value: string) => {
      form.setValue("collection", value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      setValue(value);
    },
    [form]
  );

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_700} color={colors.text_primary}>
        Add to collection
      </Text>
      <Select
        id="collection"
        {...register("collection", {
          required: "Required field",
        })}
        borderRadius={4}
        borderWidth={0}
        px={0}
        py="2"
        justifyContent="space-between"
        flexDirection="row"
        width="100%"
        color={
          value !== ""
            ? colors.text_primary
            : hexToRGB(colors.text_primary, 0.25)
        }
        bgColor={colors.brand_grey}
        placeholder={
          value === ""
            ? "Select a collection"
            : COLLECTIONS.find((collection) => collection.id === value)?.label
        }
        _placeholder={{
          color:
            value !== ""
              ? colors.text_primary
              : hexToRGB(colors.text_primary, 0.25),
        }}
        _active={{ bgColor: colors.brand_lightgrey, px: "4" }}
        transition="all 0.1s ease-in-out"
      >
        <Flex px="3" py="2">
          <InputGroup>
            <Input
              {...textStyles.body2_400}
              placeholder="Add new collection..."
              _placeholder={{ color: hexToRGB(colors.text_secondary, 0.5) }}
            />
            <InputRightAddon as={Button} onClick={() => {}}>
              <AddIcon color={hexToRGB(colors.text_secondary, 0.5)} />
            </InputRightAddon>
          </InputGroup>
        </Flex>
        {COLLECTIONS.map((collection) => (
          <Button
            as="option"
            value={collection.id}
            style={{ color: colors.brand_dark_grey }}
            onClick={() => handleChange(collection.id)}
          >
            {collection.label}
          </Button>
        ))}
      </Select>

      {errors?.collection ? (
        <Text {...textStyles.body3_700} color={colors.error} pt="1">
          {errors.collection.message}
        </Text>
      ) : null}
    </Flex>
  );
};
