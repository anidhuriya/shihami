import { extendTheme } from "@chakra-ui/react";

import { fonts, fontSizes } from "./fonts";
import breakpoints from "./breakpoints";

export const theme = extendTheme({
  fonts,
  breakpoints,
  fontSizes,
});
