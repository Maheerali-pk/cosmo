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
`;
const SecondLevelRow = styled(FirstLevelRow)`
   padding-left: 2.5rem;
   background: ${colors.companyCardBackground};
`;
const ThirdLevelRow = styled(FirstLevelRow)`
   padding-left: 4rem;
   background: ${colors.headingBackground};
   border-bottom: 1px solid ${colors.skyBlueLines};
`;
const FourthLevelRow = styled(ThirdLevelRow)`
   padding-left: 5.5rem;
   background: ${colors.headingBackground};
   border-bottom: 1px solid ${colors.skyBlueLines};
`;

const SubTableRowWrapper = styled(Grid)`
   grid-template-columns: 1fr 1fr 1.5fr 1fr 1.5fr 2fr 2fr 1fr 1fr 0.5fr;
   background: ${colors.headingBackground};
   border-bottom: 1px solid ${colors.skyBlueLines};
   padding: ${toRem(10)} 1rem;
   padding-left: 8rem;
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
const HeadingsRowWrapper = styled(SubTableRowWrapper)`
   padding: ${toRem(10)} 1rem;
   background: ${colors.headingBackground};
   border-top: ${toRem(1)} solid ${colors.headingBackground};
   padding-left: 8rem;
   height: fit-content;
   ${Text} {
      font-size: ${toRem(13)} !important;
   }
`;

interface TableRowData {
   balance: string;
   label: string;
   showMenuIcon: boolean;
   childRows?: TableRowData[];
   subTableRows?: string[][];
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
                  {
                     balance: "5000",
                     label: "Sub Sub Item 1",
                     childRows: repeat(
                        {
                           balance: "200",
                           label: "Level 4 Item",
                           subTableRows: [
                              ["Title", ...Array(8).fill(""), "649,411"],
                              ...repeat(
                                 [
                                    "Bank Transfer",
                                    "04/01/21",
                                    "AMD-EOBI-00297",
                                    "Employee",
                                    "Altimash Zaheer",
                                    "Pension for March 21'",
                                    "SCBL 10923423443543",
                                    "33,600",
                                    "0",
                                    "33,600",
                                 ],
                                 3
                              ),
                              ["Total", ...Array(6).fill(""), "106,680", "0", "106,680"],
                           ],
                        },
                        2
                     ),
                  },
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

const arrowGap = 8;

const GeneralLedgerExtra: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <SubHeader></SubHeader>
            <SelectsRow></SelectsRow>
            <Flexbox column overflowAuto>
               <HeadingsRowWrapper>
                  <Text>Name</Text>
                  <Text>Date</Text>
                  <Text>Ref</Text>
                  <Text>Type</Text>
                  <Text>Name</Text>
                  <Text>Remarks</Text>
                  <Text>Account</Text>
                  <Text>Debit</Text>
                  <Text>Credit</Text>
                  <Text>Balance</Text>
               </HeadingsRowWrapper>
               <Flexbox column fullWidth overflowAuto>
                  {tempTableData.map(({ childRows, ...rest }) => (
                     <TableRowCollapse WrapperComponent={FirstLevelRow} {...rest} showArrow arrowGap={arrowGap}>
                        {childRows!.map(({ childRows, ...rest }) => (
                           <TableRowCollapse WrapperComponent={SecondLevelRow} showArrow arrowGap={arrowGap} {...rest}>
                              {childRows!.map(({ childRows, ...rest }) => (
                                 <TableRowCollapse
                                    showArrow
                                    arrowGap={arrowGap}
                                    WrapperComponent={ThirdLevelRow}
                                    {...rest}
                                 >
                                    {childRows!.map(({ childRows, subTableRows, ...rest }) => (
                                       <TableRowCollapse
                                          WrapperComponent={FourthLevelRow}
                                          {...rest}
                                          showArrow
                                          arrowGap={arrowGap}
                                       >
                                          {subTableRows!.map((row, i) => (
                                             <SubTableRowWrapper>
                                                {row.map((item) => (
                                                   <Text fontFamily={i === 0 ? "semibold" : "regular"} size={13}>
                                                      {item}
                                                   </Text>
                                                ))}
                                             </SubTableRowWrapper>
                                          ))}
                                       </TableRowCollapse>
                                    ))}
                                 </TableRowCollapse>
                              ))}
                           </TableRowCollapse>
                        ))}
                     </TableRowCollapse>
                  ))}
               </Flexbox>
            </Flexbox>
         </PageWrapper>
      </Layout>
   );
};

export default GeneralLedgerExtra;
