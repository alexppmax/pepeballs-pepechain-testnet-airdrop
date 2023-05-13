// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "../styles/chakra/fonts";

import theme from "../styles/chakra/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
