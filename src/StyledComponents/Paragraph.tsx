import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "./Flexbox";

export default styled(Flexbox)`
   & > *:first-child {
      color: ${colors.graySubHeading};
      margin-bottom: ${toRem(2)};
      font-size: ${toRem(13)};
   }
   & > *:last-child {
      margin-left: ${toRem(4)};
      font-size: ${toRem(13)};
   }
   flex-direction: column;
   align-items: flex-start;
`;
