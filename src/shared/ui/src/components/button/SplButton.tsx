import * as React from "react";
import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../../app";
import { Icons, SvgIcon } from "../../../../assets";

type ButtonVariants =
  | "p_splend_btn"
  | "p_action_btn"
  | "s_action_btn"
  | "p_topbar_btn"
  | "p_sidebar_btn";

const useButtonVariants = (variant: ButtonVariants) => {
  const { colors, textStyles } = useTheme();

  switch (variant) {
    case "p_splend_btn":
      return {
        button: {
          bgColor: colors.brand_accent,
          color: colors.text_primary,
          _hover: {
            bgColor: "brand_accent_hover",
          },
        },
        text: {
          color: colors.text_primary,
          ...textStyles.body2_700,
        },
      };
    case "p_action_btn":
      return {
        button: {
          bgColor: colors.primary_button_positive,
          borderColor: colors.brand_accent,
          _hover: {
            bgColor: colors.primary_button_positive_hover,
            borderWidth: 1,
            filter: "drop-shadow(0 0 4px rgba(61, 102, 249, 0.5))",
          },
        },
        text: {
          color: colors.text_primary,
          ...textStyles.body2_700,
        },
      };
    case "s_action_btn":
      return {
        button: {
          bgColor: colors.secondary_button_positive,
          _hover: {
            bgColor: colors.secondary_button_positive_hover,
          },
        },
        text: {
          color: colors.text_primary,
          ...textStyles.body2_700,
        },
      };
    case "p_topbar_btn":
      return {
        button: {
          bgColor: "transparent",
          color: colors.text_primary,
          _hover: {
            bgColor: colors.brand_lightgrey,
          },
        },
        text: {
          color: colors.text_primary,
          ...textStyles.body2_700,
        },
      };
    case "p_sidebar_btn":
      return {
        button: {
          bgColor: "transparent",
          _hover: {
            bgColor: colors.brand_lightgrey,
          },
        },
        text: {
          color: colors.text_primary,
          ...textStyles.body2_700,
        },
      };
  }
};

type IconConfig = {
  icon: keyof typeof Icons;
  size?: number;
  iconColor?: string;
};

interface SplButtonProps extends Omit<ButtonProps, "icon"> {
  icon?: IconConfig;
  buttonVariant: ButtonVariants;
}

export const SplButton = ({
  icon,
  buttonVariant,
  children,
  ...rest
}: SplButtonProps) => {
  const { button, text } = useButtonVariants(buttonVariant);

  return (
    <Button transition="all 0.1s ease" {...rest} {...button} gap="4">
      {icon ? <SvgIcon {...icon} /> : null}
      <Text {...text}>{children}</Text>
    </Button>
  );
};
