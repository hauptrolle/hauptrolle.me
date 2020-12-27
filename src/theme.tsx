import { extendTheme } from "@chakra-ui/react";
import hexToRgba from "hex-to-rgba";

const colors = {
  brandGreen: {
    100: "rgb(77 255 167 / 10%)",
    500: "#0fa",
  },
  brandDark: {
    100: "#131514",
    500: "#1a1c1d",
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
      backgroundColor: "brandGreen.100",
      color: "brandGreen.500",
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
      color: "brandGreen.500",
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
