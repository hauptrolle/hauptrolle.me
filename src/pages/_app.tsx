import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";
import Head from "next/head";

const hauptrolleTheme = merge(theme, {
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    mono: "Menlo, monospace",
  },
});

function HauptrolleApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={hauptrolleTheme} resetCSS={true}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default HauptrolleApp;
