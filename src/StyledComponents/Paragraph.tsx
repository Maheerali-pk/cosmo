import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "./Flexbox";

export default styled(Flexbox)`
   & > *:first-child {
      color: #1d252c !important;

      margin-bottom: ${toRem(2)};
      font-size: ${toRem(9)};
      text-transform: uppercase;
      margin-bottom: ${toRem(6)};
      color: #1d252c;
   }
   & > *:last-child {
      font-size: ${toRem(12)};
      border: 1px solid rgb(196, 208, 218);
      padding: 0;
      border-radius: ${toRem(3)};
      width: 100%;
   }
   flex-direction: column;
   align-items: flex-start;
`;
