import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
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

const FirstLevelRow = styled(Grid)`
   padding: ${toRem(10)} 1rem;
   cursor: pointer;
   width: 100%;
   ${Text} {
      font-size: ${toRem(13)};
   }
   & > div:first-child ${Text} {
      color: ${colors.bueLink} !important;
      text-decoration: underline;
   }
   grid-template-columns: 4fr 4fr 2fr 1fr;
   ${Text} {
      text-align: center;
   }
   & > *:last-child {
      text-align: right;
   }
   & > *:first-child {
      text-align: left;
   }
`;
const HeadingsRowWrapper = styled(Grid)`
   padding: ${toRem(10)} 1rem;
   background: ${colors.headingBackground};
   border-top: ${toRem(1)} solid ${colors.headingBackground};
   grid-template-columns: 4fr 4fr 2fr 1fr;
   height: fit-content;
   ${Text} {
      font-size: ${toRem(13)} !important;
   }
   ${Text} {
      text-align: center;
   }
   & > *:last-child {
      text-align: right;
   }
   & > *:first-child {
      text-align: left;
   }
   width: 100%;
   /* overflow-y: scroll; */
`;

const SubTableRowWrapper = styled(Grid)`
   grid-template-columns: 1fr 1fr 2fr 1fr 1fr 3fr 2fr 2fr;
   border-bottom: 1px solid ${colors.skyBlueLines};
   padding: ${toRem(10)} 1rem;
   padding-left: 6rem;
   width: 100%;

   ${Text} {
      text-align: center;
      font-size: ${toRem(13)};
   }
   & > *:last-child,
   & > *:nth-child(7) {
      text-align: right;
   }
`;

const SubTableHeadingsRowWrapper = styled(SubTableRowWrapper)`
   background: ${colors.headingBackground};
   height: fit-content;
   border-top: 1px solid ${colors.skyBlueLines};
   border-bottom: none;
`;

interface TableRowData {
   rowItems: string[];
   subTableRows: string[][];
}

const tempTableData: TableRowData[] = [
   ...repeat(
      {
         rowItems: ["Century Pharmaceuticals", "Lahore, Pakistan", "", "850,000"],
         subTableRows: [
            ...repeat(
               ["73490", "Regular", "Website", "3/10/21", "3/10/21", "Completed", "150,000.00", "150,000.00"],
               13
            ),
         ],
      },
      50
   ),
];

console.log(tempTableData);

const arrowGap = 8;

const SalesCustomer: React.FC<AccountRecieveablesProps> = () => {
   return (
      <PaginationTable
         HeadingsRowWrapper={HeadingsRowWrapper}
         headings={["Name", "Location", "Status", "Balance"]}
         rowsPerPage={20}
      >
         {tempTableData.map((item) => (
            <TableRowCollapse showArrow arrowGap={24} WrapperComponent={FirstLevelRow} {...item}>
               <PaginationTable
                  HeadingsRowWrapper={SubTableHeadingsRowWrapper}
                  RowWrapper={SubTableRowWrapper}
                  rowsPerPage={5}
                  rows={item.subTableRows}
                  headings={["ID", "Type", "Title", "Created", "Edited", "Status", "Received Amount", "Total Amount"]}
                  wrapperStyles={{ minHeight: "16rem" }}
               ></PaginationTable>
            </TableRowCollapse>
         ))}
      </PaginationTable>
   );
};

export default SalesCustomer;
