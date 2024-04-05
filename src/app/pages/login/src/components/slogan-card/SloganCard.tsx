import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../../App";
import { ImgIcon } from "../../../../../../shared/assets";

export const SloganCard = () => {
  const { colors, textStyles } = useTheme();

  return (
    <Flex
      flex={1}
      height="100%"
      p="8"
      borderRadius={16}
      bgColor={colors.brand_accent}
      flexDirection="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pointerEvents="auto"
      transition="all 0.2s ease"
      _hover={{
        filter: "drop-shadow(0 0 4px rgba(61, 102, 249, 1))",
      }}
    >
      <Text {...textStyles.body1_700} color={colors.text_primary}>
        Manage
      </Text>
      <Text {...textStyles.body1_700} color={colors.text_primary}>
        How You
      </Text>
      <Text {...textStyles.body1_700} color={colors.text_primary}>
        Spend Your
      </Text>
      <Text {...textStyles.body1_700} color={colors.text_primary}>
        Savings With
      </Text>
      <Text {...textStyles.body1_700} color={colors.text_primary}>
        Splend
      </Text>
      <ImgIcon
        image="bee-money"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        filter="blur(4px)"
        transform="scale(2)"
        opacity={0.2}
        pointerEvents="none"
      />
    </Flex>
  );
};
