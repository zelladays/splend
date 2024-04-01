import { Flex, GenericAvatarIcon, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { SvgIcon } from "../../../../../assets";
import { useDrawerContext } from "../../../../../utils";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

export const DashboardActionButtons = () => {
  const { setOpenDrawer } = useDrawerContext();
  const { textStyles, colors } = useTheme();

  return (
    <Flex gap="2" alignItems="center">
      <Flex
        as="button"
        py="4"
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
        <SvgIcon icon="pot" iconColor={colors.action_button_text_1} size={24} />
        <Text color={colors.action_button_text_1} {...textStyles.body2_700}>
          Create Splend Pot
        </Text>
      </Flex>
      <Flex
        as="button"
        transition="all 0.3s ease"
        p="4"
        borderRadius={8}
        _hover={{
          bgColor: colors.action_button_bg_1,
        }}
      >
        <SearchIcon width={6} height={6} color={colors.action_button_text_1} />
      </Flex>
      <Flex
        as="button"
        transition="all 0.3s ease"
        p="4"
        borderRadius={8}
        _hover={{
          bgColor: colors.action_button_bg_1,
        }}
      >
        <BellIcon width={6} height={6} color={colors.action_button_text_1} />
      </Flex>
      <Flex
        as="button"
        transition="all 0.3s ease"
        p="4"
        borderRadius={8}
        _hover={{
          bgColor: colors.action_button_bg_1,
        }}
      >
        <GenericAvatarIcon
          width={6}
          height={6}
          color={colors.action_button_text_1}
        />
      </Flex>
    </Flex>
  );
};
