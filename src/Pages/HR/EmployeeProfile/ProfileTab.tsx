import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";

import Tabs from "../../../Components/Tabs";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export interface TableProps {}

export interface RowProps {
   items: string[];
}
const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }
   sup {
      font-size: 0.55rem;
   }
`;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         {items.map((x) => (
            <Text size={13}>{x}</Text>
         ))}
         <IconButton style={{ padding: 0 }}>
            <MoreHorizIcon fontSize="small"></MoreHorizIcon>
         </IconButton>
      </RowWrapper>
   );
};

const HeadingsRow = () => {
   const headings = ["Job Title", "Branch", "Department", "Start Date", "End Date", "Duration", ""];
   return (
      <RowWrapper style={{ borderBottom: "none", background: colors.headingBackground }}>
         {headings.map((x) => (
            <Text>{x}</Text>
         ))}
      </RowWrapper>
   );
};

const Footer = () => {
   return (
      <>
         <RowWrapper style={{ borderBottom: "none" }}>
            <Text underline>Add Item</Text>
            <div></div>
            <div></div>
            <div></div>
            <Text style={{ fontSize: "1rem" }} fontFamily="semibold">
               Serving Period
            </Text>
            <Text style={{ fontSize: "1rem" }} fontFamily="semibold">
               15 Years, Two Months
            </Text>
            <div></div>
         </RowWrapper>
      </>
   );
};

const rowsData: string[][] = repeat(["Century Pharmaceuticals", "0", "10", "360,0000", "5000000", "0"], 5);

const Table: React.FC<TableProps> = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <Flexbox column fullWidth>
            {rowsData.map((row) => (
               <Row items={row}></Row>
            ))}
         </Flexbox>
         <Footer></Footer>
      </>
   );
};

export interface AccountRecieveablesProps {}

const ProfileTab: React.FC = () => {
   return (
      <Flexbox style={{ overflowY: "auto", height: "100%" }} column padding="2rem 0rem" fullWidth>
         <UnderlinedHeading>About</UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading mt={32}>Personal</UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading mt={32}>Jobs</UnderlinedHeading>
         <Table></Table>
      </Flexbox>
   );
};

export default ProfileTab;
