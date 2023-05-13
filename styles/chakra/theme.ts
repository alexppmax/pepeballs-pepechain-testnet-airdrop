import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: `"VT323", monospace, sans-serif`,
  body: `"VT323", monospace, sans-serif`,
};

export default extendTheme({ colors, fonts });
