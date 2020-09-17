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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {process.env.NODE_ENV === "production" && (
          <script async src="https://cdn.splitbee.io/sb.js" />
        )}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default HauptrolleApp;
