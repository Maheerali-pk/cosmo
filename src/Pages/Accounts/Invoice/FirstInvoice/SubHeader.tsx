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

const SubHeader: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Flexbox pl={32} pr={52} fullWidth justify="space-between">
         <Flexbox>
            <Text fontFamily="semibold" mr={12}>
               3276
            </Text>
            <Text fontFamily="semibold">Invoice</Text>
         </Flexbox>
         <Flexbox>
            <Flexbox align="start" mr={32}>
               <Text size={20} fontFamily="semibold">
                  1060
               </Text>
               <Text size={13} fontFamily="semibold" ml={12}>
                  USD
               </Text>
            </Flexbox>
            <Flexbox align="start">
               <Text size={20} fontFamily="semibold">
                  164,141
               </Text>
               <Text size={13} fontFamily="semibold" ml={12}>
                  PKR
               </Text>
            </Flexbox>
         </Flexbox>
      </Flexbox>
   );
};

export default SubHeader;
