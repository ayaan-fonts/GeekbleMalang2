import { FONTFAMILY, getFontList, subsets } from "./subset-utils";

const fontList = getFontList(FONTFAMILY.GeekbleMalang2);

subsets(
  // woff
  ["glyph",     "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // woff2
  ["glyph",     "woff2", fontList],
  ["dynamic",   "woff2", fontList]
);