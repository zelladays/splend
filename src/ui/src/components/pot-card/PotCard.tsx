import { Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../..";
import { SvgIcon } from "../../../../assets";
import { DeletePotModal } from "../../../../libs/feature-delete-pot-modal/src";
import { Figure } from "../figure";
import { VDivider } from "../vdivider";

type PotAmount = {
  progress: number;
  goal: number;
};

type PotItemProps = {
  potId: string;
  potName: string;
  potAmount: PotAmount;
  onSpendClick?: () => void;
  onDeleteClick?: (id: string) => void;
};

export const PotCard = React.memo(
  ({
    potId,
    potName,
    potAmount,
    onSpendClick,
    onDeleteClick,
  }: PotItemProps) => {
    const { textStyles, colors } = useTheme();
    const [isHovering, setIsHovering] = React.useState(false);
    const [isCloseIconHovering, setIsCloseIconHovering] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const potProgressPercentage = React.useMemo(() => {
      return (100 * potAmount.progress) / potAmount.goal;
    }, [potAmount.goal, potAmount.progress]);

    const handleDelete = React.useCallback(() => {
      onDeleteClick?.(potId);
    }, [onDeleteClick, potId]);

    console.log({ isCloseIconHovering });

    return (
      <>
        <Flex
          as="button"
          position="relative"
          transition="all 0.2s ease-in-out"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          _hover={{
            transform: "translate(0, -8px)",
          }}
        >
          <Flex
            alignItems="center"
            flexDirection="column"
            bgColor={isHovering ? colors.pot_card_hover : colors.pot_card}
            borderRadius={8}
            px="8"
            py="6"
            gap="4"
          >
            <Flex justifyContent="space-between" gap="8" width="100%">
              <Text
                {...textStyles.body2_400}
                color={colors.pot_card_text}
                flexShrink={1}
                textOverflow="ellipsis"
                noOfLines={1}
              >
                {potName}
              </Text>
              <Text {...textStyles.body2_700} color={colors.pot_card_text}>
                *
              </Text>
            </Flex>

            <Flex gap="6">
              <Figure
                figure={"£" + potAmount.goal.toString()}
                caption="Saving Goal"
              />
              <Flex py="2">
                <VDivider color={colors.pot_card_text} />
              </Flex>
              <Figure
                figure={"£" + potAmount.progress.toString()}
                caption="Saved So Far"
              />
              <Flex py="2">
                <VDivider color={colors.pot_card_text} />
              </Flex>
              <Figure figure="Ready" caption="ETA" />
            </Flex>

            <Flex
              as="button"
              width="100%"
              bgColor={colors.pot_spendbtn}
              color={colors.pot_card_text}
              onClick={onSpendClick}
              px="2"
              py="3"
              gap="2.5"
              borderRadius={4}
              alignItems="center"
              justifyContent="center"
              _hover={{ bgColor: colors.pot_spendbtn_hover }}
              _active={{
                bgColor: colors.pot_spendbtn_hover,
                transform: "scale(1.1)",
              }}
            >
              <SvgIcon icon="money" iconColor="white" />
              <Text {...textStyles.body2_700} color={colors.pot_card_text}>
                Spend
              </Text>
            </Flex>
          </Flex>

          <Flex
            position="absolute"
            height="2px"
            left={2}
            bottom={0}
            width={isHovering ? `${Math.max(10, potProgressPercentage)}%` : 0}
            background={colors.pot_spendbtn}
            borderRadius="100%"
            transition="all 0.5s ease-in-out"
          />
          <Flex
            as="button"
            position="absolute"
            top={0}
            right={0}
            mt="-8px"
            mr="-8px"
            onClick={onOpen}
            onMouseEnter={() => setIsCloseIconHovering(true)}
            onMouseLeave={() => setIsCloseIconHovering(false)}
            transition="all 0.2s ease-in-out"
            transform={
              isHovering
                ? `scale(${isCloseIconHovering ? 1.4 : 1.2}) rotate(0.5turn)`
                : "scale(0)"
            }
          >
            <Icon
              as={SvgIcon}
              icon="cross"
              zIndex={1}
              iconColor={
                isCloseIconHovering
                  ? colors.icon_close_hover
                  : colors.icon_close
              }
            />
          </Flex>
        </Flex>
        <DeletePotModal
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleDelete}
          potId={potId}
        />
      </>
    );
  }
);
