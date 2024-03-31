import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SvgIcon } from "../../../../../assets";
import { useDrawerContext } from "../../../../../utils";
import { useTheme } from "../../../../..";
import { useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as React from "react";
import { v4 } from "uuid";
import {
  ActionButtons,
  Amount,
  Collection,
  CreatePot,
  Description,
  Interval,
  Title,
} from "../../form";

export const CreatePotDrawer = () => {
  const { register, control, handleSubmit, setValue } =
    useFormContext<CreatePot>();
  const { openDrawer, closeDrawer } = useDrawerContext();
  const { colors, textStyles } = useTheme();

  const toast = useToast();

  const onSubmit = React.useCallback(
    (values: CreatePot) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const allPots = localStorage.getItem("pots");
          const pots = allPots ? JSON.parse(allPots) : [];
          const newPot = { ...values, id: v4() };
          localStorage.setItem("pots", JSON.stringify([...pots, newPot]));

          toast({
            position: "top",
            title: "Pot created successfully",
            status: "success",
            duration: 3000,
            isClosable: false,
          });
          resolve("Done");
          closeDrawer();
        }, 3000);
      });
    },
    [closeDrawer, toast]
  );

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
        <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 1 }}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Flex flexDirection="column" gap="8">
              <Flex gap="3">
                <SvgIcon icon="pot" color="white" />
                <Text color="white" {...textStyles.h2_bold}>
                  Create Splend Pot
                </Text>
              </Flex>
              <Flex flexDirection="column" gap="8">
                <Title register={register} />
                <Description register={register} />
                <Collection register={register} />
                <Amount register={register} />
                <Interval register={register} setValue={setValue} />
              </Flex>
            </Flex>
            <ActionButtons />
          </Flex>
        </form>
      </DrawerContent>

      <DevTool control={control} />
    </Drawer>
  );
};
