import { Button, Flex } from "@chakra-ui/react";
import { useTheme } from "../../../../../app/App";
import { useFormContext } from "react-hook-form";
import { hexToRGB, useDrawerContext } from "../../../../../shared/utils/src";

export const ActionButtons = () => {
  const { colors } = useTheme();
  const { closeDrawer } = useDrawerContext();
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Flex justifyContent="space-between">
      <Flex
        as={Button}
        isDisabled={isSubmitting}
        px="4"
        py="2"
        onClick={closeDrawer}
        bgColor="transparent"
        borderColor={colors.white}
        color={colors.text_primary}
        borderRadius={8}
        _hover={{
          bgColor: hexToRGB(colors.brand_dark_grey, 0.2),
        }}
      >
        Cancel
      </Flex>
      <Flex
        as={Button}
        type="submit"
        px="4"
        py="2"
        isLoading={isSubmitting}
        color={colors.text_primary}
        bgColor={colors.primary_button_positive}
        borderRadius={8}
        _hover={{
          bgColor: colors.primary_button_positive_hover,
        }}
      >
        Create
      </Flex>
    </Flex>
  );
};
