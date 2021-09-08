import styled from "styled-components";
import { colors } from "../Helpers/utils";
import Flexbox, { flexbox } from "./Flexbox";

export default styled(Flexbox)<{ selected?: boolean }>`
   ${flexbox({ gap: 12 })}
   display: flex;
   padding: 0.7rem;
   width: 100%;
   color: ${colors.grayText};
   margin-bottom: 0.5rem;
   cursor: pointer;
   &:hover {
      background-color: ${colors.graySelection};
   }
   transition: all 0.2s ease-in-out;
   ${(p) => p.selected && `background-color: ${colors.graySelection}`}
`;
