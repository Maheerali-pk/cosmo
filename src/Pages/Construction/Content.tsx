import styled from "styled-components";
import Grid from "../../StyledComponents/Grid";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content: React.FC = () => {
   return (
      <Grid style={{ overflow: "auto", minHeight: "70vh" }} padding="2.5rem" gap="2.5rem" columns="2fr 1fr">
         <LeftContent></LeftContent>
         <RightContent></RightContent>
      </Grid>
   );
};

export default Content;
