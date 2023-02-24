import styled from "styled-components";
import {
   colors,
   repeat,
   stringsToOptions,
   toRem,
} from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../Components/Tabs";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../Dialogs/NewInvoiceDialog";
import CloseIcon from "@material-ui/icons/Close";
import Details from "./Details";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GoodReceivedNote from "../../../Drawers/GoodReceievedNote";
import CustomDrawer from "../../../Components/CustomDrawer";
export interface AccountRecieveablesProps {}

const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;

interface TableRowData {
   rowItems: string[];
   showMenuIcon: boolean;
   childRows?: TableRowData[];
}

const tempTableData: TableRowData[] = [
   ...repeat(
      {
         balance: "300,000",
         label: "Item 1",
         childRows: repeat(
            {
               balance: "100,000",
               label: "Sub Item 1",
               childRows: repeat(
                  { balance: "5000", label: "Sub Sub Item 1" },
                  5
               ),
            },
            5
         ),
      },
      6
   ),
];

console.log(tempTableData);

const Bank: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <CustomDrawer
               Component={GoodReceivedNote}
               width="50%"
            ></CustomDrawer>
            {/* <PageContentHeader
               items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}
            ></PageContentHeader> */}
            {/* <PageSubHeaderWrapper>
               <Flexbox>
                  <Text fontFamily="semibold" mr={12}>
                     2
                  </Text>
                  <Text mr={8} fontFamily="semibold">
                     Airmed SCBL
                  </Text>
                  <Text color="graySubHeading">USD #1005486260035</Text>
               </Flexbox>
               <Flexbox column>
                  <Flexbox fullWidth justify="end" pr={8}>
                     <CloseIcon style={{ cursor: "pointer" }}></CloseIcon>
                  </Flexbox>
                  <Flexbox gap={24} mr={48}>
                     <Flexbox align="start">
                        <Text size={20} mr={10}>
                           48,000
                        </Text>
                        <Text size={12}>PKR</Text>
                     </Flexbox>
                     <Flexbox align="start">
                        <Text size={20} mr={10}>
                           7,200,000
                        </Text>
                        <Text size={12}>USD</Text>
                     </Flexbox>
                  </Flexbox>
               </Flexbox>
            </PageSubHeaderWrapper> */}
            {/* <Tabs
               buttonStyles={{
                  paddingBottom: "0.75rem",
                  marginBottom: "0.2rem",
               }}
               headerStyles={{ paddingLeft: "2rem" }}
               titles={["Details", "Transactions", "Reconcilation"]}
               rightSideContent={
                  <Flexbox gap={24} mr={40}>
                     <IconButton style={{ padding: "0" }}>
                        <AttachFileIcon fontSize="small"></AttachFileIcon>
                     </IconButton>
                     <IconButton style={{ padding: "0" }}>
                        <HistoryIcon fontSize="small"></HistoryIcon>
                     </IconButton>
                     <IconButton style={{ padding: "0" }}>
                        <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                     </IconButton>
                  </Flexbox>
               }
            > */}
            <Details></Details>
            {/* </Tabs> */}
         </PageWrapper>
      </Layout>
   );
};

export default Bank;
