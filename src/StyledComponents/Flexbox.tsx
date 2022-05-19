import styled, { css } from "styled-components";
import { colors, toEm, toRem } from "../Helpers/utils";

export type FlexPos = "center" | "end" | "start" | "around" | "space-between" | "evenly";
export interface FlexboxProps {
   column?: boolean;
   align?: FlexPos;
   justify?: FlexPos;
   gap?: string | number;
   fullWidth?: boolean;
   fullHeight?: boolean;
   padding?: string;
   margin?: string;
   background?: keyof typeof colors | string;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;
   px?: number;
   py?: number;

   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   overflowAuto?: boolean;
   noBorder?: boolean;
   width?: number;
   borderRadius?: number;
   em?: boolean;
}

const flexPosObject: { [k in FlexPos]: string } = {
   "space-between": "space-between",
   around: "space-around",
   center: "center",
   end: "flex-end",
   start: "flex-start",
   evenly: "space-evenly",
};

export default styled.div<FlexboxProps>`
   ${(p) => flexbox(p)};
`;

export const flexbox = (p: FlexboxProps) => {
   const func = p.em ? toEm : toRem;
   return css`
      display: flex;
      flex-direction: ${p.column ? "column" : "row"};
      align-items: ${flexPosObject[p.align || (p.column ? "start" : "center")]};
      justify-content: ${flexPosObject[p.justify || "start"]};

      ${p.gap &&
      css`
         & > * {
            ${p.column
               ? css`
                    margin-bottom: ${typeof p.gap === "number" ? func(p.gap) : p.gap} !important;
                 `
               : css`
                    margin-right: ${typeof p.gap === "number" ? func(p.gap) : p.gap} !important;
                 `}
         }
         & > *:last-child {
            ${p.column
               ? css`
                    margin-bottom: 0 !important;
                 `
               : css`
                    margin-right: 0 !important;
                 `}
         }
      `}
      ${p.fullWidth && `width: 100%`};
      ${p.fullHeight && `height: 100%`};

      ${p.padding && `padding: ${p.padding}`};
      ${p.margin && `margin: ${p.margin}`};

      ${p.px && `padding-left: ${func(p.px)}; padding-right: ${func(p.px)}`};
      ${p.py && `padding-top: ${func(p.py)}; padding-bottom: ${func(p.py)}`};
      ${p.pb && `padding-bottom: ${func(p.pb)}`};
      ${p.pb && `padding-bottom: ${func(p.pb)}`};
      ${p.pt && `padding-top: ${func(p.pt)}`};
      ${p.pl && `padding-left: ${func(p.pl)}`};
      ${p.pr && `padding-right: ${func(p.pr)}`};

      ${p.mb && `margin-bottom: ${func(p.mb)}`};
      ${p.mt && `margin-top: ${func(p.mt)}`};
      ${p.ml && `margin-left: ${func(p.ml)}`};
      ${p.mr && `margin-right: ${func(p.mr)}`};
      ${p.overflowAuto && `overflow: auto`};
      ${p.background && `background: ${colors[p.background as keyof typeof colors] || p.background}`};
      ${p.noBorder && `border: none !important`};
      ${p.width && `width: ${func(p.width)}`};
      ${p.borderRadius && `border-radius: ${func(p.borderRadius)}`};
   `;
};
