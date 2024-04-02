import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const colors = {
  brand_dark_grey: "#1A191E",
  brand_grey: "#31313D",
  brand_lightgrey: "#3D3D4D",

  pot_card: "#31313D",
  pot_card_hover: "#3f3f4e",
  pot_card_text: "#FFFFFF",
  pot_spendbtn: "#3D66F9",
  pot_spendbtn_hover: "#7893f7",

  action_button_bg_1: "#31313D",
  action_button_bg_1_hover: "#3f3f4e",
  action_button_text_1: "#ffffff",
  action_button_bg_2: "#8FD0EC",
  action_button_text_2: "#2A6A6F",

  icon_close: "#e92a2a",
  icon_close_hover: "#ff6767",

  primary_button_positive: "#3D66F9",
  primary_button_positive_hover: "#7893f7",
  primary_button_negative: "#e92a2a",
  primary_button_negative_hover: "#c21a1a",

  secondary_button: "#a6a6cc",

  text_primary: "#FFFFFF",
  text_secondary: "#000000",

  brand: "#57558d",
  brandSecondary: "#353453",
  brandTertiary: "#4E4C72",
  darkBrand: "#282743",
  white: "#FFFFFF",
  purpleDark: "#a980ef",
  purpleLight: "#c9a6fa",
  pinkDark: "#f06f93",
  pinkLight: "#fd9eb1",
  greenDark: "#35c29e",
  greenLight: "#95f2af",
  error: "#ff675d",
  grayLight: "#F6F6F6",
  grayLight1: "#E9E9E9",
  grayLight2: "#D3D3D3",
  buttonPrimary: "#48A5E9",
  buttonPrimary_hover: "#5EB8FA",
};

export const gradients = {
  green: {
    start: "#47C353",
    end: "#6AE7A3",
  },
  orange: {
    start: "#BD722D",
    end: "#D49142",
  },
};

const themeValues = {
  colors,
  textStyles,
};

const theme = extendTheme({
  colors,
  textStyles,
  fonts: {
    heading: "Merienda",
    body: "Open Sans",
  },
});

export { theme, themeValues };
