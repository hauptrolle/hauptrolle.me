import { extendTheme, ThemeConfig, theme as base } from "@chakra-ui/react";
import { mauveDark } from "@radix-ui/colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  textStyles: {
    sectionHeading: {
      fontSize: "xs",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      color: "gray.100",
      fontFamily: "body",
    },
  },
  fonts: {
    body: `Inter, ${base.fonts.body}`,
    heading: `Alata, ${base.fonts.heading}`,
  },
  colors: {
    gray: {
      50: mauveDark.mauve10,
      100: mauveDark.mauve9,
      200: mauveDark.mauve8,
      300: mauveDark.mauve7,
      400: mauveDark.mauve6,
      500: mauveDark.mauve5,
      600: mauveDark.mauve4,
      700: mauveDark.mauve3,
      800: mauveDark.mauve1,
      900: mauveDark.mauve1,
    },
  },
});

export default theme;
