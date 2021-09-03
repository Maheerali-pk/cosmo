import styled, { css } from "styled-components";
import { toRem } from "../Helpers/utils";

type FlexPos = "center" | "end" | "start" | "around" | "space-between" | "evenly";
interface FlexboxProps {
   column?: boolean;
   align?: FlexPos;
   justify?: FlexPos;
   gap?: string | number;
   fullWidth?: boolean;
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

export const flexbox = (p: FlexboxProps) => css`
   display: flex;
   flex-direction: ${p.column ? "column" : "row"};
   align-items: ${flexPosObject[p.align || (p.column ? "start" : "center")]};
   justify-content: ${flexPosObject[p.justify || "start"]};

   ${p.gap &&
   css`
      & > * {
         ${p.column
            ? css`
                 margin-bottom: ${typeof p.gap === "number" ? toRem(p.gap) : p.gap};
              `
            : css`
                 margin-right: ${typeof p.gap === "number" ? toRem(p.gap) : p.gap};
              `}
      }
      & > *:last-child {
         ${p.column
            ? css`
                 margin-bottom: 0;
              `
            : css`
                 margin-right: 0;
              `}
      }
   `}
   ${p.fullWidth && `width: 100%`};
`;
