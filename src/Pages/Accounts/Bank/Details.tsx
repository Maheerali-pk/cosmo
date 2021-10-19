import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Button, Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../Components/Tabs";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../Dialogs/NewInvoiceDialog";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
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
const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 0.5fr 1fr 1fr 1.5fr 1.5fr 1.5fr 1fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      text-align: center;
      font-size: ${toRem(13)};
   }

   & > ${Text}:nth-child(1) {
      text-align: left;
   }
   /* & > ${Text}:nth-child(7),
   & > ${Text}:nth-child(8) {
      text-align: right !important;
   } */
   sup {
      font-size: 0.55rem;
   }
`;
const StickyFooterWrapper = styled(Flexbox)`
   position: fixed;
   bottom: 0;
   right: 0;
   width: calc(100% - 15rem);
   background: ${colors.headingBackground};
`;
const TableHeaderWrapper = styled(RowWrapper)`
   background: #fcfcfc;
`;
const Footer = styled(Flexbox)`
   background: #fcfcfc;
   width: ;
   position: fixed;
`;
const TableRow: React.FC<{ items: string[] }> = ({ items }) => {
   return (
      <RowWrapper>
         {items.map((x) => (
            <Text>{x}</Text>
         ))}
         <IconButton style={{ padding: "0" }}>
            <MoreHorizIcon></MoreHorizIcon>
         </IconButton>
      </RowWrapper>
   );
};
const tableData: string[][] = repeat(
   ["1", "Bank Transfer", "Debit Card", "VISA", "**********4821", "12/24", "3,500.00"],
   3
);
const Table = () => {
   return (
      <Flexbox fullWidth column overflowAuto>
         <TableHeaderWrapper>
            <Text>Sr</Text>
            <Text>Mode</Text>
            <Text>Through</Text>
            <Text>Desc</Text>
            <Text>Details</Text>
            <Text>Validity</Text>
            <Text>Limit</Text>
            <Text></Text>
         </TableHeaderWrapper>
         <Flexbox fullWidth column overflowAuto>
            {tableData.map((x) => (
               <TableRow items={x}></TableRow>
            ))}
         </Flexbox>
      </Flexbox>
   );
};

interface TableRowData {
   rowItems: string[];
   showMenuIcon: boolean;
   childRows?: TableRowData[];
}

const Details: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Flexbox padding="2rem" column fullWidth>
         <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               About
            </Text>
         </UnderlinedHeading>
         <Grid mb={40} fullWidth style={{ height: "fit-content" }} gap="2rem" noOfColumns={3}>
            <Paragraph>
               <Text>Title</Text>
               <Text>Airmed SCBL</Text>
            </Paragraph>
            <Paragraph>
               <Text>Account Type</Text>
               <Text>Bank</Text>
            </Paragraph>
            <Paragraph>
               <Text>Details</Text>
               <Text>Checking - Foreign Currency</Text>
            </Paragraph>
            <Paragraph>
               <Text>Account No.</Text>
               <Text>1005486260035</Text>
            </Paragraph>
            <Paragraph>
               <Text>Currency</Text>
               <Text>United States Dollars - USD</Text>
            </Paragraph>
            <Paragraph>
               <Text>Balance - USD</Text>
               <Text>42,000</Text>
            </Paragraph>
         </Grid>

         <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               Usage
            </Text>
         </UnderlinedHeading>
         <Grid mb={40} fullWidth style={{ height: "fit-content" }} gap="2rem" noOfColumns={3}>
            <Paragraph>
               <Text>Company</Text>
               <Text>All Expenses</Text>
            </Paragraph>
            <Paragraph>
               <Text>Customers</Text>
               <Text>All Customers</Text>
            </Paragraph>
            <Paragraph>
               <Text>Suppliers</Text>
               <Text>International Suppliers Only</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               Payment Mode
            </Text>
         </UnderlinedHeading>
         <Table></Table>
         <Text mb={50} size={13} mt={20} underline>
            Add Item
         </Text>
         <StickyFooterWrapper justify="end" padding="0.75rem 1rem">
            <Button variant="contained">
               <Text fontFamily="semibold"></Text> Save
            </Button>
         </StickyFooterWrapper>
      </Flexbox>
   );
};

export default Details;
