import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"Roboto", sans-serif`,
    heading: `"Urbanist", sans-serif;`,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        width: "100%",
        height: "100%",
      },
      "#__next": {
        width: "100%",
        minHeight: "100%",
        color: "black.300",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

export default theme;
