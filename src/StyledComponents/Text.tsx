import styled, { css } from "styled-components";
import { colors, FontFamilyKey, fonts, toRem } from "../Helpers/utils";

interface TextProps {
   size?: number;
   fontFamily?: FontFamilyKey;
   color?: keyof typeof colors;
   isLink?: boolean;
}
console.log("hello");

export default styled.div<TextProps>`
   ${(p) => text(p)};
`;

export const text = (p: TextProps) => css`
   font-size: ${toRem(p.size || 16)};
   font-family: ${fonts[p.fontFamily || "regular"]};
   color: ${colors[p.color || "grayText"]};
   ${p.isLink &&
   css`
      cursor: pointer;
      color: ${colors.bueLink};
      text-decoration: underline;
   `}
`;
