import Navbar from "../../Components/Navbar";
import Flexbox from "../../StyledComponents/Flexbox";

import Tabs from "../../Components/Tabs";
import { toRem } from "../../Helpers/utils";
import CompanyCard from "../../Components/CompanyCard";
import styled from "styled-components";
import Grid from "../../StyledComponents/Grid";

const CompanyCardsWrapper = styled(Grid)`
   grid-row-gap: ${toRem(54)};
   /* grid-column-gap: ${toRem(100)}; */
   grid-column-gap: auto;
   height: fit-content;
`;

const Main: React.FC = () => {
   return (
      <Flexbox column fullWidth>
         <Navbar headingItems={[]} />{" "}
         <Flexbox padding="1rem 2rem" fullWidth column>
            <Tabs titles={["Dashboard", "Companies"]}>
               <Flexbox padding={`${toRem(24)} ${toRem(10)}`}>Dashbaord</Flexbox>
               <CompanyCardsWrapper padding={`${toRem(24)} ${toRem(10)}`} fullWidth noOfColumns={5}>
                  <CompanyCard
                     description="Some Text"
                     dots={1}
                     logoColor="#B56701"
                     logoText="AC"
                     text="AdChem Chin dfasdfas dfsad "
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={3}
                     logoColor="#1C5E68"
                     logoText="AE"
                     text="AdChem Egypt"
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={6}
                     logoColor="#8855C2"
                     logoText="AF"
                     text="AdChem FZE"
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={4}
                     logoColor="#F16F6F"
                     logoText="AI"
                     text="AdChem India"
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={1}
                     logoColor="#B56701"
                     logoText="AT"
                     text="AdChem Turkey"
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={2}
                     logoColor="#B4C461"
                     logoText="A"
                     text="Airmed"
                  ></CompanyCard>
                  <CompanyCard
                     description="Some Text"
                     dots={3}
                     logoColor="#01B555"
                     logoText="AC"
                     text="Alternative Chemicals"
                  ></CompanyCard>
               </CompanyCardsWrapper>
            </Tabs>
         </Flexbox>
      </Flexbox>
   );
};

export default Main;
