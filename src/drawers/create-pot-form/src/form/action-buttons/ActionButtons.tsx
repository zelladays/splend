import { Button, Flex } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { useFormContext } from "react-hook-form";
import { useDrawerContext } from "../../../../../utils";

export const ActionButtons = () => {
  const { colors } = useTheme();
  const { closeDrawer } = useDrawerContext();
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Flex justifyContent="space-between">
      <Button
        variant="outline"
        isDisabled={isSubmitting}
        onClick={closeDrawer}
        color="white"
        _hover={{
          bg: "rgba(255, 255, 255, 0.2)",
          transform: "translate(0px, -4px)",
        }}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        isLoading={isSubmitting}
        bgColor={colors.buttonPrimary}
        color="white"
        _hover={{
          bg: colors.buttonPrimary_hover,
          transform: "translate(0px, -4px)",
        }}
      >
        Create
      </Button>
    </Flex>
  );
};
