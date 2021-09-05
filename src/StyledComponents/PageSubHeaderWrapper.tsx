import styled from "styled-components";
import Flexbox, { flexbox } from "./Flexbox";

export default styled(Flexbox)`
   ${flexbox({ justify: "space-between", column: true, padding: "0.75rem 0.75rem 0.75rem 2.5rem", fullWidth: true })};
`;
