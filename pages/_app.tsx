import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/theme";
import Navbar from "../components/Navbar";
import LayoutMain from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ChakraProvider>
  );
}

export default MyApp;
