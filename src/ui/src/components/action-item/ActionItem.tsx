import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { Icons } from "../../../../assets";
import { useTheme } from "../../../..";
import { hexToRGB } from "../../../../utils";

type ActionItemProps = {
  asset: keyof typeof Icons;
  label: string;
  onClick: () => void;
};

export const ActionItem = React.memo(
  ({ asset, label, onClick }: ActionItemProps) => {
    const { textStyles, colors } = useTheme();
    const [isHovering, setIsHovering] = React.useState(false);
    const AssetIcon = Icons[asset];

    return (
      <Flex
        as="button"
        onClick={onClick}
        borderRadius={4}
        borderColor={hexToRGB(colors.white, 0.2)}
        borderWidth={1}
        alignItems="center"
        justifyContent="center"
        bgColor={isHovering ? colors.brandSecondary : "transparent"}
        p="2"
        gap="4"
        maxHeight="12"
        width={!isHovering ? "12" : "64"}
        overflowX="clip"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        transition="width 0.3s ease-in-out, background-color 0.1s ease-in-out"
      >
        <AssetIcon color="white" />

        {isHovering ? (
          <Text
            {...textStyles.body2_700}
            color="white"
            transition="color 0.1s ease-in-out"
            noOfLines={1}
          >
            {label}
          </Text>
        ) : null}
      </Flex>
    );
  }
);
