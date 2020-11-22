import { extendTheme } from "@chakra-ui/react";

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
  global: () => ({
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
  }),
};

export const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors,
  styles,
});
