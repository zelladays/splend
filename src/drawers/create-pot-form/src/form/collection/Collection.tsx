import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import { hexToRGB } from "../../../../../utils";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { ChevronDownIcon } from "@chakra-ui/icons";

const COLLECTIONS = [
  { label: "Vacation", id: "vacation" },
  { label: "Driving", id: "driving" },
];

export const Collection = ({ register }: FormProps) => {
  const { textStyles, colors } = useTheme();
  const formRegister = register("collection", { required: true });
  const [value, setValue] = React.useState("");

  const form = useFormContext();

  const handleChange = React.useCallback(
    (value: string) => {
      form.setValue("collection", value);
      setValue(value);
    },
    [form]
  );

  return (
    <Flex flexDirection="column" gap="1">
      <Text {...textStyles.body2_700} color="white">
        Add to collection
      </Text>
      <Menu closeOnSelect={true}>
        <MenuButton
          as={Flex}
          role="button"
          aria-haspopup="menu"
          id="collection"
          {...formRegister}
          borderRadius={4}
          borderWidth={0}
          px={0}
          py="2"
          justifyContent="space-between"
          flexDirection="row"
          width="100%"
          bgColor={colors.brand_grey}
          _placeholder={{ color: hexToRGB(colors.text_primary, 0.25) }}
          _active={{ bgColor: colors.brand_lightgrey, px: "4" }}
          transition="all 0.1s ease-in-out"
        >
          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <Text
              color={
                value !== ""
                  ? colors.text_primary
                  : hexToRGB(colors.text_primary, 0.25)
              }
            >
              {value === ""
                ? "Select a collection"
                : COLLECTIONS.find((collection) => collection.id === value)
                    ?.label}
            </Text>
            <ChevronDownIcon
              color={
                value !== ""
                  ? colors.text_primary
                  : hexToRGB(colors.text_primary, 0.25)
              }
            />
          </Flex>
        </MenuButton>
        <MenuList>
          {COLLECTIONS.map((collection) => (
            <MenuItem
              as="button"
              value={collection.id}
              style={{ color: colors.brand_dark_grey }}
              onClick={() => handleChange(collection.id)}
            >
              {collection.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
