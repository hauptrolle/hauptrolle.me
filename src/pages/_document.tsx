import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

import theme from "../theme";

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alata&family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <script data-no-cookie async data-api="/_hive" src="/bee.js" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
