import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Text,
  useToast,
  CloseButton,
} from "@chakra-ui/react";
import { hexToRGB, useDrawerContext } from "../../../../../utils";
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
  const { control, formState, register, handleSubmit, setValue } =
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
        bgColor={colors.brand_grey}
        px="12"
        pb="12"
        gap="8"
        borderLeftWidth={1}
        borderColor={hexToRGB(colors.white, 0.2)}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 1 }}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Flex flexDirection="column" gap="8">
              <Flex
                gap="3"
                alignItems="center"
                justifyContent="space-between"
                borderBottomWidth={1}
                borderBottomColor={hexToRGB(colors.white, 0.2)}
                py="6"
              >
                <Text color={colors.text_primary} {...textStyles.h2_bold}>
                  Create Splend Pot
                </Text>
                <CloseButton
                  onClick={closeDrawer}
                  color={colors.text_primary}
                />
              </Flex>
              <Flex flexDirection="column" gap="8">
                <Title register={register} errors={formState.errors} />
                <Description register={register} errors={formState.errors} />
                <Collection register={register} errors={formState.errors} />
                <Amount register={register} errors={formState.errors} />
                <Interval
                  register={register}
                  setValue={setValue}
                  errors={formState.errors}
                />
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
