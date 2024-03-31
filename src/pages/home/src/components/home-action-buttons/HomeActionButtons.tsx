import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { SvgIcon } from "../../../../../assets";
import { useDrawerContext } from "../../../../../utils";

export const DashboardActionButtons = () => {
  const { setOpenDrawer } = useDrawerContext();
  const { textStyles, colors } = useTheme();

  return (
    <Flex gap="6">
      <Flex
        as="button"
        py="8"
        justifyContent="center"
        alignItems="center"
        px="6"
        borderRadius={8}
        bgColor={colors.action_button_bg_1}
        gap="4"
        onClick={() => setOpenDrawer("createPot")}
        transition="all 0.3s ease"
        _hover={{ transform: "translate(0, -4px)" }}
      >
        <SvgIcon icon="pot" iconColor={colors.action_button_text_1} />
        <Text color={colors.action_button_text_1} {...textStyles.h2_bold}>
          Create Splend Pot
        </Text>
      </Flex>

      <Flex
        as="button"
        py="8"
        px="6"
        justifyContent="center"
        alignItems="center"
        borderRadius={8}
        bgColor={colors.action_button_bg_2}
        gap="4"
        transition="all 0.3s ease"
        _hover={{ transform: "translate(0, -4px)" }}
      >
        <SvgIcon icon="pot" iconColor={colors.action_button_text_2} />
        <Text color={colors.action_button_text_2} {...textStyles.h2_bold}>
          Create Splend Collection
        </Text>
      </Flex>
    </Flex>
  );
};
