import styled, { css } from "styled-components";
import { colors, FontFamilyKey, fonts, toRem } from "../Helpers/utils";

interface TextProps {
   size?: number;
   fontFamily?: FontFamilyKey;
   color?: keyof typeof colors | "inherit";
   isLink?: boolean;
   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;
   p?: number;
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
   color: ${p.color === "inherit" ? "inherit" : colors[p.color || "grayText"]};
   ${p.isLink &&
   css`
      cursor: pointer;
      color: ${colors.bueLink};
      text-decoration: underline;
   `}
   ${p.p && `padding: ${toRem(p.p)}`};
   ${p.mb && `margin-bottom: ${toRem(p.mb)}`};
   ${p.mt && `margin-top: ${toRem(p.mt)}`};
   ${p.ml && `margin-left: ${toRem(p.ml)}`};
   ${p.mr && `margin-right: ${toRem(p.mr)}`};
   ${p.pb && `padding-bottom: ${toRem(p.pb)}`};
   ${p.pt && `padding-top: ${toRem(p.pt)}`};
   ${p.pl && `padding-left: ${toRem(p.pl)}`};
   ${p.pr && `padding-right: ${toRem(p.pr)}`};
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
