import styled from "styled-components";
import Grid from "../../StyledComponents/Grid";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content: React.FC = () => {
   return (
      <Grid padding="2.5rem" columns="65% 35%">
         <LeftContent></LeftContent>
         <RightContent></RightContent>
      </Grid>
   );
};

export default Content;
