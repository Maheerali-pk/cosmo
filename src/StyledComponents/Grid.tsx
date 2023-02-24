import styled, { css } from "styled-components";
import { toEm, toRem } from "../Helpers/utils";
import { FlexPos } from "./Flexbox";

export interface GridProps {
   noOfColumns?: number;
   gap?: string;
   columns?: string;
   fullWidth?: boolean;
   padding?: string;
   align?: FlexPos;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;
   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   minHeight?: boolean;
   colGap?: string;
   em?: boolean;
}

export const grid = (p: GridProps) => {
   const func = p.em ? toEm : toRem;
   return css`
      display: grid;
      gap: ${p.gap || ""};
      grid-template-columns: ${p.noOfColumns &&
      `repeat(${p.noOfColumns}, 1fr)`};
      ${p.columns && `grid-template-columns: ${p.columns}`};
      ${!p.minHeight && `height: 100%`};
      ${p.fullWidth && `width: 100%`};
      ${p.padding && `padding: ${p.padding}`};

      ${p.pb && `padding-bottom: ${func(p.pb)}`};
      ${p.pt && `padding-top: ${func(p.pt)}`};
      ${p.pl && `padding-left: ${func(p.pl)}`};
      ${p.pr && `padding-right: ${func(p.pr)}`};

      ${p.mb && `margin-bottom: ${func(p.mb)}`};
      ${p.mt && `margin-top: ${func(p.mt)}`};
      ${p.ml && `margin-left: ${func(p.ml)}`};
      ${p.mr && `margin-right: ${func(p.mr)}`};
      ${p.align && `align-items: ${p.align}`};
      column-gap: ${p.colGap || ""};
   `;
};

export default styled.div<GridProps>`
   ${(p) => grid(p)};
`;
