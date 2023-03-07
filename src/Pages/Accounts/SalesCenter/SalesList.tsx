import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Icon } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import Grid from "../../../StyledComponents/Grid";
import PaginationTable from "../../../Components/PaginationTable";

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

const BaseRow = styled(Grid)`
   grid-template-columns: 0.5fr 1fr 1fr 2fr 1fr 1fr 3fr 2fr 2fr;
   border-bottom: 1px solid ${colors.skyBlueLines};
   padding: ${toRem(10)} 1rem;
   width: 100%;

   & ${Text}:first-child {
      color: ${colors.bueLink} !important;
      text-decoration: underline;
   }
   ${Text} {
      font-size: ${toRem(12)};
      padding-right: 0.5rem;
      padding-left: 0.5rem;
   }
   & > *:last-child,
   & > *:nth-child(7) {
      text-align: right;
   }
`;

const HeadingsRowWrapper = styled(BaseRow)`
   height: fit-content;
   border-top: 1px solid ${colors.skyBlueLines};
   border-bottom: none;
   padding: ${toRem(3)} 1rem;
   & ${Text}:first-child {
      text-decoration: none;
   }
   background-color: #f5f7f9;
   box-shadow: 0 1px 2px 0 #dbe3ea;
   & ${Text} {
      color: #1d252c !important;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 9px;
      position: relative;
      padding: ${toRem(7)} 0.5rem;
   }
   & ${Text}:not(:last-child):after {
      content: "";
      position: absolute;
      width: 1px;
      top: 20%;
      bottom: 20%;
      background-color: #dbe3ea;
      right: 1px;
   }
`;
const TableRowWrapper = styled(BaseRow)`
   &:hover {
      background-color: #f5f7f9;
   }
   transition: background 0.2s ease;
`;

interface TableRowData {
   rowItems: string[];
   subTableRows: string[][];
}

const tempTableData: string[][] = [
   ...repeat(
      [
         "73490",
         "Regular",
         "Website",
         "3/10/21",
         "3/10/21",
         "Completed",
         "Completed",
         "Completed",
      ],
      50
   ),
];

console.log(tempTableData);

const arrowGap = 8;

const SalesList: React.FC<AccountRecieveablesProps> = () => {
   return (
      <PaginationTable
         HeadingsRowWrapper={HeadingsRowWrapper}
         RowWrapper={TableRowWrapper}
         rowsPerPage={40}
         rows={tempTableData}
         headings={[
            "ID",
            "Type",
            "Title",
            "Created",
            "Edited",
            "Status",
            "Received Amount",
            "Total Amount",
         ]}
      ></PaginationTable>
   );
};

export default SalesList;
