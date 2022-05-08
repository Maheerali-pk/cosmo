import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import Paragraph from "../../../StyledComponents/Paragraph";
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
import { Stages } from "../../../Components/Stages";
import FirstInvoice from "./FirstInvoice/FirstInvoice";
import Dropdown from "../../../Components/Dropdown";
import DuplicateInvoice from "../../../Dialogs/DuplicateInvoice";
export interface AccountRecieveablesProps {}

const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content auto;
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
               childRows: repeat({ balance: "5000", label: "Sub Sub Item 1" }, 5),
            },
            5
         ),
      },
      6
   ),
];

console.log(tempTableData);

const Invoice: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <Grid padding="0.5rem 2rem" columns="4fr 1fr 1fr 1fr 1fr 0.5fr" fullWidth>
               <Flexbox gap="1rem">
                  <Text fontFamily="semibold">1251</Text>
                  <Flexbox column>
                     <Text fontFamily="semibold">Website</Text>
                     <Text size={13}>Sale - Twin Food Stores</Text>
                  </Flexbox>
               </Flexbox>
               <Paragraph>
                  <Text>Status</Text>
                  <Text>New</Text>
               </Paragraph>
               <Paragraph>
                  <Text>Owner</Text>
                  <Text>Hamza Shafi</Text>
               </Paragraph>
               <Paragraph>
                  <Text>Customer</Text>
                  <Text>Twin Food Stores</Text>
               </Paragraph>
               <Paragraph>
                  <Text>P.O. #</Text>
                  <Text>546283</Text>
               </Paragraph>
               <div>
                  <Dropdown
                     style={{ background: colors.graySelection2 }}
                     items={[
                        { text: "Option 1", onClick: () => {} },
                        { text: "Option 2", onClick: () => {} },
                     ]}
                     label="Menu"
                     showDropdownIcon
                  ></Dropdown>
               </div>
            </Grid>
            <Stages
               stages={[
                  { icon: "circle", label: "First Invoice" },
                  { icon: "empty", label: "First Pamyment" },
               ]}
            >
               <FirstInvoice></FirstInvoice>
            </Stages>
         </PageWrapper>
      </Layout>
   );
};

export default Invoice;
