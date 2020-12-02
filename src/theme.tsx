import { extendTheme } from "@chakra-ui/react";
import hexToRgba from "hex-to-rgba";

const colors = {
  brand: {
    green: {
      base: "#0fa",
      shade: "rgb(77 255 167 / 10%)",
    },
    dark: {
      base: "#1a1c1d",
      shade: "#131514",
    },
  },
};

const styles = {
  global: ({ theme }) => ({
    html: {
      overflowY: "scroll",
    },
    "html, body": {
      bg: "gray.800",
      color: "white",
    },
    "*::selection": {
      backgroundColor: "brand.green.shade",
      color: "brand.green.base",
    },
    "@keyframes pulse-live": {
      "0%": {
        transform: "scale(0.95)",
        boxShadow: `0 0 0 0 ${hexToRgba(theme.colors.red[600], 0.8)}`,
      },
      "70%": {
        transform: "scale(1)",
        boxShadow: `0 0 0 6px ${hexToRgba(theme.colors.red[600], 0)}`,
      },
      "100%": {
        transform: "scale(0.95)",
        boxShadow: `0 0 0 0 ${hexToRgba(theme.colors.red[600], 0)}`,
      },
    },
  }),
};

const components = {
  Link: {
    baseStyle: {
      color: "brand.green.base",
    },
  },
};

export const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors,
  styles,
  components,
});
