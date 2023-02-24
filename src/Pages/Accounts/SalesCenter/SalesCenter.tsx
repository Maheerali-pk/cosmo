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
import SalesCustomer from "./SalesCustomer";
import SalesList from "./SalesList";
import SalesDetailed from "./SalesDetailed";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../Dialogs/NewInvoiceDialog";
import CustomizeList from "../../../Drawers/CustomizeList";
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

const SalesCenter: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <CustomDrawer width="25%" Component={CustomizeList}></CustomDrawer>
            {/* <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader> */}
            {/* <PageSubHeaderWrapper>
               <Text size={20} fontFamily="semibold">
                  Sales
               </Text>
            </PageSubHeaderWrapper> */}

            <SalesList></SalesList>
         </PageWrapper>
      </Layout>
   );
};

export default SalesCenter;
