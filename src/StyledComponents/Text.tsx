import styled, { css } from "styled-components";
import { colors, FontFamilyKey, fonts, toEm, toRem } from "../Helpers/utils";

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
   fontWeight?: "bold" | "regular" | "light";
   em?: boolean;
}
console.log("hello");

export default styled.div<TextProps>`
   ${(p) => text(p)};
`;

export const text = (p: TextProps) => {
   const func = p.em ? toEm : toRem;
   return css`
      font-size: ${toEm(p.size || 16)};
      font-family: ${fonts[p.fontFamily || "regular"]} ${p.fontFamily ? " !important" : ""};
      color: ${p.color === "inherit" ? "inherit" : colors[p.color || "grayText"]};
      ${p.isLink &&
      css`
         cursor: pointer;
         color: ${colors.bueLink};
         text-decoration: underline;
      `}
      ${p.p && `padding: ${toEm(p.p)}`};
      ${p.mb && `margin-bottom: ${toEm(p.mb)}`};
      ${p.mt && `margin-top: ${toEm(p.mt)}`};
      ${p.ml && `margin-left: ${toEm(p.ml)}`};
      ${p.mr && `margin-right: ${toEm(p.mr)}`};
      ${p.pb && `padding-bottom: ${toEm(p.pb)}`};
      ${p.pt && `padding-top: ${toEm(p.pt)}`};
      ${p.pl && `padding-left: ${toEm(p.pl)}`};
      ${p.pr && `padding-right: ${toEm(p.pr)}`};
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
};

/* ${p.fontWeight && `font-weight: ${p.fontWeight}`}; */
