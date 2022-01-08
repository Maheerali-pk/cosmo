import styled from "styled-components";
import { colors, repeat, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Button from "@material-ui/core/Button";
import PageContentHeader from "../../Components/PageContentHeader";
import CloseIcon from "@material-ui/icons/Close";
import Layout from "../../Components/Layout";
import Tabs from "../../Components/Tabs";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";
import Grid from "../../StyledComponents/Grid";
import Paragraph from "../../StyledComponents/Paragraph";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import Dropdown from "../../Components/Dropdown";
import ButtonGroupRadio from "../../Components/ButtonGroupRadio";
import { useState } from "react";
import { DragIndicator } from "@material-ui/icons";
// import Table from "./Table";
export interface AccountRecieveablesProps {}
const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;

const IconButtonWrapper = styled(IconButton)`
   padding: 0 !important;
   width: fit-content !important;
`;

export interface RowProps {
   items: string[];
}
const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 0.35fr 0.35fr 2fr 1.5fr 1.5fr 1.5fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   padding-left: 1rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }

   & > ${Text}:nth-child(4),
   & > ${Text}:nth-child(5),
   & > ${Text}:nth-child(7),
   & > ${Text}:nth-child(6) {
      text-align: right !important;
   }
   sup {
      font-size: 0.55rem;
   }
`;

// const HeadingsWrapper = styled(RowWrapper)``;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         <DragIndicator></DragIndicator>
         {items.map((x) => (
            <Text>{x}</Text>
         ))}
         <Flexbox justify="end" fullWidth>
            <IconButtonWrapper>
               <MoreHorizIcon></MoreHorizIcon>
            </IconButtonWrapper>
         </Flexbox>
      </RowWrapper>
   );
};

const HeadingsRow = () => {
   const headings = ["", "Sr", "Item", "Current Value", "New Value", "Adjusted Value", ""];
   return (
      <RowWrapper style={{ background: colors.headingBackground }}>
         {headings.map((x) => (
            <Text>{x}</Text>
         ))}
      </RowWrapper>
   );
};

const rowsData: string[][] = repeat(["1", "Lenovo ThinkPad T460", "50,000.00", "60,000.00", "10,000.00"], 3);

const Table: React.FC = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <Flexbox mb={16} overflowAuto column fullWidth>
            {rowsData.map((row) => (
               <Row items={row}></Row>
            ))}
         </Flexbox>
         <Flexbox gap={16}>
            <Text size={13} cursorPointer underline>
               Add Item
            </Text>
            <Text size={13} cursorPointer underline>
               Clear List
            </Text>
            <Text size={13} cursorPointer underline>
               Clear Details{" "}
            </Text>
         </Flexbox>
      </>
   );
};

const NewAdjustments: React.FC = () => {
   const [mode, setMode] = useState("Value");
   return (
      <Layout navbarItems={["Airmed", "Supply Chain", "Logistics"]}>
         <PageWrapper>
            <PageContentHeader
               items={["Planning", "Sourcing", "Production", "Logistics", "Reports"]}
            ></PageContentHeader>
            <Flexbox padding="1.25rem 0.75rem 1.25rem 2rem" justify="space-between">
               <Text fontFamily="semibold">New Adjustments</Text>
               <CloseIcon style={{ marginTop: "-1rem" }} fontSize="small"></CloseIcon>
            </Flexbox>
            <Flexbox gap={100} style={{ borderBottom: `${toRem(2)} solid #E1E1E1` }} padding="0.75rem 2rem">
               <Flexbox gap={24}>
                  <Text color="graySubHeading" size={13}>
                     Mode:
                  </Text>
                  <ButtonGroupRadio
                     size="small"
                     value={mode}
                     onChange={setMode}
                     items={["Quality", "Value"]}
                  ></ButtonGroupRadio>
               </Flexbox>
               <Flexbox gap={24}>
                  <Text color="graySubHeading" size={13}>
                     Status
                  </Text>
                  <Text size={13}>New</Text>
               </Flexbox>
               <Flexbox gap={24}>
                  <Text color="graySubHeading" size={13}>
                     Reference
                  </Text>
                  <Text size={13}>12345</Text>
               </Flexbox>
            </Flexbox>
            <Flexbox padding="2rem" overflowAuto column fullWidth>
               <UnderlinedHeading>About</UnderlinedHeading>
               <Grid mb={40} noOfColumns={3} fullWidth minHeight>
                  <Paragraph>
                     <Text>Date</Text>
                     <Text>June 14th, 2021</Text>
                  </Paragraph>
                  <Paragraph>
                     <Text>Account</Text>
                     <Text>Cost of Goods Sold</Text>
                  </Paragraph>
                  <Paragraph>
                     <Text>Reason</Text>
                     <Text>Cost of Goods Sold</Text>
                  </Paragraph>
               </Grid>
               <UnderlinedHeading>Item Details</UnderlinedHeading>
               <Table></Table>
            </Flexbox>
         </PageWrapper>
      </Layout>
   );
};

export default NewAdjustments;
