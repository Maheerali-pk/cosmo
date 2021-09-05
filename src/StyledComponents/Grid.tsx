import styled, { css } from "styled-components";
import { toRem } from "../Helpers/utils";

interface GridProps {
   noOfColumns?: number;
   gap?: string;
   columns?: string;
   fullWidth?: boolean;
   padding?: string;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;
}

export const grid = (p: GridProps) => css`
   display: grid;
   gap: ${p.gap || ""};
   grid-template-columns: ${p.noOfColumns && `repeat(${p.noOfColumns}, 1fr)`};
   ${p.columns && `grid-template-columns: ${p.columns}`};
   height: 100%;
   ${p.fullWidth && `width: 100%`};
   ${p.padding && `padding: ${p.padding}`};

   ${p.pb && `padding-bottom: ${toRem(p.pb)}`}
   ${p.pt && `padding-top: ${toRem(p.pt)}`} 
   ${p.pl && `padding-left: ${toRem(p.pl)}`} 
   ${p.pr && `padding-right: ${toRem(p.pr)}`}
`;

export default styled.div<GridProps>`
   ${(p) => grid(p)};
`;
