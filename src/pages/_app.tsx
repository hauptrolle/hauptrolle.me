import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";
import Head from "next/head";

import React from "react";

const hauptrolleTheme = merge(theme, {
  colors: {
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
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "brand.dark.base" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
      "*::selection": {
        backgroundColor: "brand.green.shade",
        color: "brand.green.base",
      },
    }),
  },
});

function HauptrolleApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={hauptrolleTheme} resetCSS={true}>
      <Head>
        <title>Achim Rolle - Frontend developer & web designer</title>
        <meta
          name={"description"}
          content={
            "I am Achim. A self taught frontend developer & web designer from Hessen/Germany"
          }
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default HauptrolleApp;
