import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import { SvgIcon } from "../../../../../assets";
import { useDrawerContext } from "../../../../../utils";
import { useTheme } from "../../../../..";

export const CreatePotDrawer = () => {
  const { openDrawer, closeDrawer } = useDrawerContext();
  const { colors, textStyles } = useTheme();

  return (
    <Drawer
      placement="right"
      onClose={closeDrawer}
      isOpen={openDrawer === "createPot"}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent
        mr="8"
        my="8"
        bgColor={colors.brandSecondary}
        p="12"
        borderRadius={8}
        gap="8"
        boxShadow="0px 0px 3px rgba(255, 255, 255, 0.2)"
      >
        <Flex gap="3">
          <SvgIcon icon="pot" color="white" />
          <Text color="white" {...textStyles.h3}>
            Create Splend Pot
          </Text>
        </Flex>
        <Flex flexDirection="column" gap="1">
          <Text {...textStyles.body2_400} color="white">
            Title
          </Text>
          <Input
            bgColor="white"
            borderRadius={4}
            placeholder="Enter the name of your pot..."
            _placeholder={{ color: colors.grayLight }}
          />
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
