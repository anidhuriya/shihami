import { extendTheme } from "@chakra-ui/react";

import { fonts, fontSizes } from "../foundations/fonts";
import breakpoints from "../foundations/breakpoints";

export const theme = extendTheme({
  fonts,
  breakpoints,
  fontSizes,
});
