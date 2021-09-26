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
import useSelect from "../../../Hooks/useSelect";
import useDatePicker from "../../../Hooks/useDatePicker";
import Table from "./Table";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Icon } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";

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
   border-bottom: 1px solid ${colors.skyBlueLines};
   &:hover {
      background-color: ${colors.skyBlueLines};
   }
   width: 100%;
   ${Text} {
      font-size: ${toRem(13)};
   }
`;
const SecondLevelRow = styled(FirstLevelRow)`
   padding-left: 3rem;
`;
const ThirdLevelRow = styled(FirstLevelRow)`
   padding-left: 7rem;
`;

const HeadingsRowWrapper = styled(Flexbox)`
   padding: ${toRem(10)} 1rem;
   background: ${colors.headingBackground};
   border-top: ${toRem(1)} solid ${colors.headingBackground};
`;

interface TableRowData {
   balance: string;
   label: string;
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

const ChartOfAccounts: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <SubHeader></SubHeader>
            <SelectsRow></SelectsRow>
            <Flexbox column overflowAuto>
               <HeadingsRowWrapper fullWidth justify="space-between">
                  <Text size={13} ml={44}>
                     Name
                  </Text>
                  <Text size={13}>Balance</Text>
               </HeadingsRowWrapper>
               <Flexbox column fullWidth overflowAuto>
                  {tempTableData.map(({ childRows, ...rest }) => (
                     <TableRowCollapse WrapperComponent={FirstLevelRow} {...rest} showArrow arrowGap={24}>
                        {childRows!.map(({ childRows, ...rest }) => (
                           <TableRowCollapse WrapperComponent={SecondLevelRow} showArrow arrowGap={24} {...rest}>
                              {childRows!.map(({ childRows, ...rest }) => (
                                 <TableRowCollapse WrapperComponent={ThirdLevelRow} {...rest}></TableRowCollapse>
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

export default ChartOfAccounts;
