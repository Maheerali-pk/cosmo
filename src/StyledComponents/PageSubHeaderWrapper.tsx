import styled from "styled-components";
import Flexbox, { flexbox } from "./Flexbox";

export default styled(Flexbox)`
   ${(p) => flexbox({ justify: "space-between", padding: "0.75rem 0.75rem 0.75rem 2.5rem", fullWidth: true, ...p })};
`;
