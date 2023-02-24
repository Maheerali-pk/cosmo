import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SubHeader from "./SubHeader";
import SelectsRow from "./SelectsRow";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Icon } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import Grid from "../../../StyledComponents/Grid";

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

const FirstLevelRow = styled(Flexbox)`
   padding: ${toRem(10)} 1rem;
   cursor: pointer;
   width: 100%;
   ${Text} {
      font-size: ${toRem(13)};
   }
   background: ${colors.sidebarBackground};
   justify-content: space-between;
`;
const SecondLevelRow = styled(FirstLevelRow)`
   padding-left: 2.5rem;
   background: ${colors.companyCardBackground};
`;

const SubTableRowWrapper = styled(Grid)`
   grid-template-columns: auto min-content;
   background: ${colors.headingBackground};
   border-bottom: 1px solid ${colors.skyBlueLines};
   padding: ${toRem(10)} 1rem;
   padding-left: 5rem;
   width: 100%;

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

interface TableRowData {
   rowItems: string[];
   showMenuIcon: boolean;
   showArrow?: boolean;
   childRows?: TableRowData[];
   subTableRows?: string[][];
}

const tableData1: TableRowData[] = [
   {
      rowItems: ["Assets"],
      showMenuIcon: false,
      childRows: [
         {
            rowItems: ["Cash"],
            subTableRows: [
               ["Petty Cash", "500.00"],
               ["Total Cash", "500.00"],
            ],
            showMenuIcon: false,
         },

         {
            rowItems: ["Bank"],
            subTableRows: [
               ["Petty Cash(CNY)", "500.00"],
               ["Test Account", "500.00"],
               ["Total Bank", "1000.00"],
            ],
            showMenuIcon: false,
         },
         {
            rowItems: ["Cash and Cash equivalents", "1000.00"],
            showMenuIcon: false,
         },
         {
            rowItems: ["Current Assets"],
            subTableRows: [
               ["Accounts Receivable", "500.00"],
               ["Accounts Receivable - AED", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Accounts Receivable - EGP", "500.00"],
               ["Total Currrent Assets", "5000.00"],
            ],
            showMenuIcon: false,
         },
         { rowItems: ["Total Assets", "10000.00"], showMenuIcon: false, showArrow: false },
      ],
   },
];

const tableData2: TableRowData[] = [
   {
      rowItems: ["Equity and Liabilities"],
      showMenuIcon: false,
      childRows: [
         {
            rowItems: ["Current Liabilities"],
            subTableRows: [
               ["Accounts Payable - AED", "0.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Accounts Payable - EUR", "500.00"],
               ["Total Current Liabilities", "3500.00"],
            ],
            showMenuIcon: false,
         },
         {
            rowItems: ["Equity"],
            subTableRows: [
               ["Current Year Earnings", "500.00"],
               ["Opening", "500.00"],
               ["Retained Earings", "500.00"],
               ["Total Equity", "1000.00"],
            ],
            showMenuIcon: false,
         },

         { rowItems: ["Total Equities and liabilities", "10000.00"], showMenuIcon: false, showArrow: false },
      ],
   },
];

const arrowGap = 8;
interface TableProps {
   items: TableRowData[];
}

const Table: React.FC<TableProps> = ({ items }) => {
   return (
      <Flexbox column fullWidth overflowAuto>
         {items.map(({ childRows, ...rest }) => (
            <TableRowCollapse WrapperComponent={FirstLevelRow} {...rest} showArrow arrowGap={arrowGap}>
               {childRows!.map(({ childRows, subTableRows, ...rest }) => (
                  <TableRowCollapse
                     WrapperComponent={SecondLevelRow}
                     {...rest}
                     showArrow={Boolean(subTableRows?.length)}
                     arrowGap={arrowGap}
                  >
                     {subTableRows?.map((row, i) => (
                        <SubTableRowWrapper>
                           {row.map((item) => (
                              <Text
                                 // size={i === subTableRows!.length - 1 ? 17 : 13}
                                 fontFamily={i === subTableRows!.length - 1 ? "semibold" : "regular"}
                                 size={13}
                              >
                                 {item}
                              </Text>
                           ))}
                        </SubTableRowWrapper>
                     ))}
                  </TableRowCollapse>
               ))}
            </TableRowCollapse>
         ))}
      </Flexbox>
   );
};
const Table1Wrapper = styled(Flexbox)`
   border-right: 4px solid white;
`;

const BalanceSheet: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <SubHeader></SubHeader>
            <SelectsRow></SelectsRow>
            <Grid noOfColumns={2}>
               <Table1Wrapper column align="start">
                  <Table items={tableData1}></Table>
               </Table1Wrapper>

               <Flexbox column align="start">
                  <Table items={tableData2}></Table>
               </Flexbox>
            </Grid>
         </PageWrapper>
      </Layout>
   );
};

export default BalanceSheet;
