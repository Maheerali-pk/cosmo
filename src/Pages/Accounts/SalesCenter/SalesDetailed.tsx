import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Button, Icon } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import Grid from "../../../StyledComponents/Grid";
import PaginationTable from "../../../Components/PaginationTable";
import Dropdown from "../../../Components/Dropdown";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../Dialogs/NewInvoiceDialog";

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
   height: fit-content;
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
   grid-template-columns: 1fr 3fr 1.5fr 1.5fr 4fr 1fr 1.5fr 1.5fr 1fr;
   border-bottom: 1px solid ${colors.skyBlueLines};
   padding: ${toRem(10)} 1rem;
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
         rowItems: ["Estimates"],
         subTableRows: [
            ...repeat(
               [
                  "73490",
                  "Century Pharmaceuticals",
                  "3/10/21",
                  "Saved",
                  "Accounts Receivable",
                  "Cash",
                  "3/10/21",
                  "12",
                  "150,000.00",
               ],
               42
            ),
         ],
      },
      6
   ),
];

const FilterWrapper = styled(Flexbox)`
   background: ${colors.companyCardBackground};
   border-radius: 0.5rem;
   color: ${colors.inputLightText};
   i,
   .MuiSvgIcon-root {
      color: ${colors.inputLightText} !important;
   }

   padding: 0.75rem 1.25rem;
   ${Text} {
      color: ${colors.inputLightText};
   }
   .dropdown-btn {
      margin-right: 1rem !important;
   }
`;
const FilterInput = styled.input`
   background: transparent;
   border: none;
   outline: none;
   color: ${colors.inputLightText};
   ::placeholder {
      color: ${colors.inputLightText};
   }
   width: 100%;
`;

console.log(tempTableData);

const arrowGap = 8;
const SalesDetailed: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Flexbox column fullWidth overflowAuto>
         {state.dialog === NewInvoiceDialog && <state.dialog></state.dialog>}
         <Flexbox fullWidth padding="1rem 1.5rem">
            <FilterWrapper fullWidth gap={48}>
               <Flexbox gap={16} style={{ width: "80%" }}>
                  <i className="fas fa-filter"></i>
                  <FilterInput placeholder="Filter by keyword"></FilterInput>
               </Flexbox>
               <Flexbox fullWidth justify="space-between">
                  <Flexbox>
                     <Dropdown
                        label="Type"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                     <Dropdown
                        label="Status"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                     <Dropdown
                        label="Account"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                     <Dropdown
                        label="Method"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                     <Dropdown
                        label="Due Date"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                     <Dropdown
                        label="Amount"
                        items={[
                           { text: "Option 1", onClick: () => {} },
                           { text: "Option 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                  </Flexbox>
                  <Button>
                     <Text style={{ color: "#7F7F7F" }} fontFamily="semibold">
                        Clear
                     </Text>
                  </Button>
               </Flexbox>
            </FilterWrapper>
         </Flexbox>
         <Flexbox column fullWidth overflowAuto>
            {tempTableData.map((item) => (
               <TableRowCollapse showArrow arrowGap={24} WrapperComponent={FirstLevelRow} {...item}>
                  <PaginationTable
                     HeadingsRowWrapper={SubTableHeadingsRowWrapper}
                     RowWrapper={SubTableRowWrapper}
                     rowsPerPage={15}
                     rows={item.subTableRows}
                     headings={[
                        "ID",
                        "Customer",
                        "Posted Date",
                        "Status",
                        "Account",
                        "Method",
                        "Due Date",
                        "Aging",
                        "Amount",
                     ]}
                     wrapperStyles={{ minHeight: "45rem" }}
                  ></PaginationTable>
               </TableRowCollapse>
            ))}
         </Flexbox>
      </Flexbox>
   );
};

export default SalesDetailed;
