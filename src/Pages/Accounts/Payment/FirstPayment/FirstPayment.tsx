import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../../StyledComponents/Flexbox";
import Text from "../../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../../Components/PageContentHeader";
import Layout from "../../../../Components/Layout";
import TableRowCollapse from "../../../../Components/TableRowCollapse";
import { Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../../Components/Tabs";
import { useGlobalContext } from "../../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../../Components/Stages";
import SelectsRow from "./SelectsRow";
import Content from "./Content";
import List from "./List";
import SettingsIcon from "@material-ui/icons/Settings";
import Footer from "./Footer";
import StickyFooter from "./StickyFooter";
import DuplicateInvoice from "../../../../Dialogs/DuplicateInvoice";
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

const FirstPayment: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Flexbox style={{ position: "relative" }} mt={24} column fullWidth>
         <Flexbox pl={32} pr={52} fullWidth justify="space-between">
            <Flexbox>
               <Text fontFamily="semibold" mr={12}>
                  125
               </Text>
               <Text fontFamily="semibold">First Payment</Text>
            </Flexbox>
            <Flexbox align="start">
               <Text size={20} fontFamily="semibold">
                  400,000
               </Text>
               <Text size={13} fontFamily="semibold" ml={12}>
                  PKR
               </Text>
            </Flexbox>
         </Flexbox>
         <SelectsRow></SelectsRow>
         <Content></Content>
         <Flexbox column fullWidth>
            <Flexbox padding="0.25rem 2rem" fullWidth justify="space-between">
               <Text fontFamily="semibold">List</Text>
               <IconButton style={{ padding: "0.25rem" }}>
                  <SettingsIcon
                     onClick={() => dispatch({ setDialog: DuplicateInvoice })}
                     fontSize="small"
                  ></SettingsIcon>
               </IconButton>
            </Flexbox>
            <List></List>
         </Flexbox>
         <Footer></Footer>
         <StickyFooter></StickyFooter>
      </Flexbox>
   );
};

export default FirstPayment;
