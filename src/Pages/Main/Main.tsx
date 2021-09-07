import Navbar from "../../Components/Navbar";
import Flexbox from "../../StyledComponents/Flexbox";

import Tabs from "../../Components/Tabs";
import { toRem } from "../../Helpers/utils";
import CompanyCard from "../../Components/CompanyCard";
import styled from "styled-components";
import Grid from "../../StyledComponents/Grid";

const CompanyCardsWrapper = styled(Grid)`
   grid-row-gap: ${toRem(54)};
   grid-column-gap: ${toRem(100)};
`;

const Main: React.FC = () => {
   return (
      <Flexbox column fullWidth>
         <Navbar headingItems={[]} />{" "}
         <Flexbox padding="1rem 2rem" fullWidth column>
            <Tabs titles={["Dashboard", "Companies"]}>
               <Flexbox padding={`${toRem(24)} ${toRem(10)}`}>Dashbaord</Flexbox>
               <CompanyCardsWrapper padding={`${toRem(24)} ${toRem(10)}`} fullWidth noOfColumns={5}>
                  <CompanyCard dots={1} logoColor="#B56701" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={3} logoColor="#1C5E68" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={6} logoColor="#8855C2" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={4} logoColor="#F16F6F" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={1} logoColor="#B56701" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={2} logoColor="#B4C461" logoText="AC" text="AdChem China"></CompanyCard>
                  <CompanyCard dots={3} logoColor="#01B555" logoText="AC" text="AdChem China"></CompanyCard>
               </CompanyCardsWrapper>
            </Tabs>
         </Flexbox>
      </Flexbox>
   );
};

export default Main;
