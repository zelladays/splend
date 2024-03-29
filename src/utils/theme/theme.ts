import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const colors = {
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
  error: "#FE392C",
  grayLight: "#94949F",
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
