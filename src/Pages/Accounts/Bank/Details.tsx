import styled from "styled-components";
import {
   colors,
   repeat,
   stringsToOptions,
   toRem,
} from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Button, ButtonGroup, Icon, IconButton } from "@material-ui/core";
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
import {
   AttachFile,
   ChatBubbleOutline,
   CloudUploadOutlined,
   LinkOutlined,
   NoteOutlined,
} from "@material-ui/icons";
import FooterFigure from "../../../Components/FooterFigure";
import FooterButton from "../../../Components/FooterButton";
import GoodReceivedNote from "../../../Drawers/GoodReceievedNote";
import Input from "@material-ui/core/Input";
import EditableCell from "../../../Components/EditableCell";
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
   grid-template-columns: 0.25fr 1fr 1fr 1.5fr 1.5fr 1.5fr 1fr 0.25fr;
   border-bottom: 1px solid ${colors.skyBlueLines};
   background-color: #f6f7f9;
   margin-bottom: 4.8px;
   align-items: center;
   & > *:first-child {
      padding-left: 19px !important;
   }
`;
const StickyFooterWrapper = styled(Flexbox)<{ isSidebarOpen?: boolean }>`
   position: fixed;
   bottom: 0;
   right: 0;
   width: ${(p) =>
      p.isSidebarOpen ? "calc(100% - 217px - 85px)" : "calc(100% - 85px)"};
   background: #eceff3;
`;
const TableHeaderWrapper = styled(RowWrapper)`
   background: #ffffff;
   margin-bottom: 5px;

   ${Text} {
      justify-content: start;
      font-size: ${toRem(8)};

      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 12px;
   }

   border: none;
   ${Text} {
      border-right: none;
      text-transform: uppercase;
   }
   & > *:first-child {
      padding-left: 19px !important;
   }
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
            <EditableCell text={x}></EditableCell>
            // <Text>{x}</Text>
         ))}
         {/* <IconButton style={{ padding: "0" }}>
            <MoreHorizIcon></MoreHorizIcon>
         </IconButton> */}
      </RowWrapper>
   );
};
const tableData: string[][] = repeat(
   [
      "1",
      "Bank Transfer",
      "Debit Card",
      "VISA",
      "**********4821",
      "12/24",
      "3,500.00",
   ],
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
      <Flexbox column fullWidth>
         {/* <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               About
            </Text>
         </UnderlinedHeading> */}
         <Grid
            mb={80}
            fullWidth
            style={{ height: "fit-content" }}
            gap="2rem"
            noOfColumns={3}
            padding="1.25rem 1.25rem 0 1.25rem"
         >
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
            <Paragraph>
               <Text>Customer</Text>
               <Input disableUnderline></Input>
            </Paragraph>
         </Grid>

         {/* <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               Usage
            </Text>
         </UnderlinedHeading>
         <Grid
            mb={40}
            fullWidth
            style={{ height: "fit-content" }}
            gap="2rem"
            noOfColumns={3}
         >
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
         </Grid> */}
         {/* <UnderlinedHeading>
            <Text fontFamily="semibold" size={13}>
               Payment Mode
            </Text>
         </UnderlinedHeading> */}
         <Table></Table>
         {/* <Text mb={50} size={13} mt={20} underline>
            Add Item
         </Text> */}
         <StickyFooterWrapper
            isSidebarOpen={state.isSmallSidebarOpen}
            justify="space-between"
            padding="0.75rem 1rem"
         >
            <Flexbox gap={32}>
               <FooterFigure
                  text="History & Notes"
                  onClick={() => {}}
                  icon={
                     <ChatBubbleOutline fontSize="small"></ChatBubbleOutline>
                  }
               ></FooterFigure>
               <FooterFigure
                  text="Introduction"
                  onClick={() => {}}
                  icon={<NoteOutlined fontSize="small"></NoteOutlined>}
               ></FooterFigure>
               <FooterFigure
                  text="Attachments"
                  onClick={() => {}}
                  icon={
                     <CloudUploadOutlined fontSize="small"></CloudUploadOutlined>
                  }
               ></FooterFigure>
               <FooterFigure
                  text="Links"
                  onClick={() => {
                     dispatch({ setState: { drawer: GoodReceivedNote } });
                  }}
                  icon={<LinkOutlined fontSize="small"></LinkOutlined>}
               ></FooterFigure>
            </Flexbox>
            <Flexbox gap={16}>
               <FooterButton
                  onClick={() => {}}
                  text="Draft"
                  color="secondary"
               ></FooterButton>
               <FooterButton
                  onClick={() => {}}
                  text="Print PDF"
                  color="secondary"
                  hasMenu={true}
                  menuItems={[{ text: "Customize", onClick: () => {} }]}
               ></FooterButton>
               <FooterButton
                  onClick={() => {}}
                  text="Save and Approve"
                  hasMenu={true}
                  menuItems={[{ text: "Approve & Email", onClick: () => {} }]}
               ></FooterButton>

               <ButtonGroup></ButtonGroup>
            </Flexbox>
         </StickyFooterWrapper>
      </Flexbox>
   );
};

export default Details;
