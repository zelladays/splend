import { Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../..";
import { SvgIcon } from "../../../../assets";
import { DeletePotModal } from "../../../../libs/feature-delete-pot-modal/src";

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

type FigureProps = {
  figure: string;
  caption: string;
};

const Figure = React.memo(({ figure, caption }: FigureProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column">
      <Text {...textStyles.body1_700} color={colors.pot_card_text}>
        {figure}
      </Text>
      <Text {...textStyles.body3_400} color={colors.pot_card_text}>
        {caption}
      </Text>
    </Flex>
  );
});

const VerticalDivider = () => {
  const { colors } = useTheme();

  return <Flex width="1px" height="100%" background={colors.pot_card_text} />;
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    const potProgressPercentage = React.useMemo(() => {
      return (100 * potAmount.progress) / potAmount.goal;
    }, [potAmount.goal, potAmount.progress]);

    const handleDelete = React.useCallback(() => {
      onDeleteClick?.(potId);
    }, [onDeleteClick, potId]);

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
            bgColor={colors.pot_card}
            borderRadius={8}
            px="8"
            py="6"
            gap="2.5"
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
              <VerticalDivider />
              <Figure
                figure={"£" + potAmount.progress.toString()}
                caption="Saved So Far"
              />
              <VerticalDivider />
              <Figure figure="Ready" caption="ETA" />
            </Flex>

            <Button
              width="100%"
              bgColor={colors.pot_spendbtn}
              color={colors.pot_card_text}
              onClick={onSpendClick}
              _hover={{ bgColor: colors.pot_spendbtn_hover }}
              _active={{
                bgColor: colors.pot_spendbtn_hover,
                transform: "scale(1.1)",
              }}
            >
              Spend
            </Button>
          </Flex>

          <Flex
            position="absolute"
            height="6px"
            left={0}
            bottom={0}
            width={isHovering ? `${potProgressPercentage}%` : 0}
            background={colors.pot_spendbtn}
            borderRadius="0 4px 4px 8px"
            transition="all 0.2s ease-in-out"
            zIndex={1}
          />
          <Flex
            as="button"
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
            mt="-8px"
            mr="-8px"
            onClick={onOpen}
            transition="all 0.2s ease-in-out"
            transform={isHovering ? "scale(1.2) rotate(0.5turn)" : "scale(0)"}
          >
            <Icon as={SvgIcon} icon="cross" iconColor={colors.red} />
          </Flex>
        </Flex>
        <DeletePotModal
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleDelete}
          potId=""
        />
      </>
    );
  }
);
