import { Button } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../Helpers/utils";

export default styled(Button)`
   border-radius: 0.125rem !important;
   color: white !important;
   padding: 0.5rem 2.25rem !important;
   background-color: ${colors.blueButton};
   margin-top: 3.25rem;
   border-radius: 0.125rem !important;
`;
