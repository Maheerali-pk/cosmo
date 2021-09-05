import styled from "styled-components";
import { colors, fonts } from "../Helpers/utils";
import Flexbox, { flexbox } from "./Flexbox";
import Text from "./Text";

export default styled(Flexbox)`
   ${(p) => flexbox({ fullWidth: true, mb: 20, ...p })};
   font-family: ${fonts.semibold};
   border-bottom: 1px solid ${colors.tableFooterHrColor};
`;
