import styled from "styled-components";

interface GridProps {
   noOfColumns?: number;
   gap?: string;
   columns?: string;
   fullWidth?: boolean;
}

export default styled.div<GridProps>`
   display: grid;
   gap: ${(p) => p.gap || ""};
   grid-template-columns: ${(p) => p.noOfColumns && `repeat(${p.noOfColumns}, 1fr)`};
   ${(p) => p.columns && `grid-template-columns: ${p.columns}`};
   height: 100%;
   ${(p) => p.fullWidth && `width: 100%`};
`;
