import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

import PageContainer from "../components/PageContainer";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Achim Rolle - Frontend Developer & web designer"
        description="A self taught frontend developer & web designer from Hessen/Germany"
      />

      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ChakraProvider>
  );
};

export default App;
