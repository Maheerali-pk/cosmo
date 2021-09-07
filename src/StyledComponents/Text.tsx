import styled, { css } from "styled-components";
import { colors, FontFamilyKey, fonts, toRem } from "../Helpers/utils";

interface TextProps {
   size?: number;
   fontFamily?: FontFamilyKey;
   color?: keyof typeof colors;
   isLink?: boolean;
   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   underline?: boolean;
   align?: "left" | "center" | "right";
   cursorPointer?: boolean;
   breakcrumb?: boolean;
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
   ${p.mb && `margin-bottom: ${toRem(p.mb)}`};
   ${p.mt && `margin-top: ${toRem(p.mt)}`};
   ${p.ml && `margin-left: ${toRem(p.ml)}`};
   ${p.mr && `margin-right: ${toRem(p.mr)}`};
   ${p.underline && `text-decoration: underline;`};
   ${p.align && `text-align: ${p.align}`};
   ${p.cursorPointer && `cursor: pointer`};
   ${p.breakcrumb &&
   css`
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   `}
`;
