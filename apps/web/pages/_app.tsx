import { ChakraProvider } from "@chakra-ui/react";
import theme from "ui/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
