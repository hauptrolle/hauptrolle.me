import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/core";

function HauptrolleApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default HauptrolleApp;
