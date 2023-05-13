import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#47057b",
    800: "#47057b",
    700: "#47057b",
  },
};

const fonts = {
  heading: `"VT323", monospace, sans-serif`,
  body: `"VT323", monospace, sans-serif`,
};

export default extendTheme({ colors, fonts });
