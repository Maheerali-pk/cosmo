import styled from "styled-components";
import PageContentHeader from "../../Components/PageContentHeader";
import { colors } from "../../Helpers/utils";
import Content from "./Content";
import SubHeader from "./SubHeader";

const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;

const Construction: React.FC = () => {
   return (
      <PageWrapper>
         <PageContentHeader items={["Dashboard", "Projects", "Filters", "Reports"]} />
         <SubHeader></SubHeader>
         <Content></Content>
      </PageWrapper>
   );
};

export default Construction;
