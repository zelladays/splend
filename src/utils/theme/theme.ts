import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const colors = {
  brand: "#47FFC8",
  brandSecondary: "#06161D",
  darkBrand: "#051014",
  white: "#FFFFFF",
  error: "#FE392C",
};

const themeValues = {
  colors,
  textStyles,
};

const theme = extendTheme({
  colors,
  textStyles,
  fonts: {
    heading: "Open Sans",
    body: "Lekton",
  },
});

export { theme, themeValues };
