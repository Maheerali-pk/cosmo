import styled from "styled-components";
import { colors, fonts, repeat, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";

import Tabs from "../../../Components/Tabs";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TableRowCollapse from "../../../Components/TableRowCollapse";

export interface TableProps {}

export interface RowProps {
   items: string[];
}

const SubRowWrapper = styled(Flexbox)`
   width: 100%;
   padding: ${toRem(10)} 4rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   justify-content: space-between;
   ${Text} {
      font-size: ${toRem(13)};
   }
`;

const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr;
   padding: ${toRem(10)} 2rem;
   padding-right: 0rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }

   sup {
      font-size: 0.55rem;
   }
`;

const HeaderRowWrapper = styled(RowWrapper)`
   background: ${colors.headingBackground};
   border-bottom: none;
`;

const SubHeaderRowWrapper = styled(SubRowWrapper)`
   background: ${colors.headingBackground};
`;

const SubTableWrapper = styled(Flexbox)`
   ${SubRowWrapper}:last-child > ${Text} {
      font-family: ${fonts.semibold};
   }
`;
const SubTableWrapperLeft = styled(SubTableWrapper)`
   border-right: ${toRem(2)} solid #b8b8b8;
`;

interface PayTableProps {
   earnings: [string, string][];
   deductions: [string, string][];
   headings: string[];
   collapsible: boolean;
   netPay: string;
}

const PayTable: React.FC<PayTableProps> = ({ headings, earnings, deductions, netPay }) => {
   return (
      <TableRowCollapse arrowGap={32} showArrow rowItems={headings} WrapperComponent={RowWrapper}>
         <Grid noOfColumns={2} fullWidth>
            <SubTableWrapperLeft fullWidth column>
               <SubHeaderRowWrapper style={{ paddingLeft: "7rem" }}>
                  <Text>Earnings</Text>
                  <Text>Amount - PKR</Text>
               </SubHeaderRowWrapper>

               {earnings.map(([x, y]) => (
                  <SubRowWrapper style={{ paddingLeft: "7rem" }}>
                     <Text>{x}</Text>
                     <Text>{y}</Text>
                  </SubRowWrapper>
               ))}
            </SubTableWrapperLeft>
            <SubTableWrapper column fullWidth>
               <SubHeaderRowWrapper>
                  <Text>Deductions</Text>
                  <Text>Amount - PKR</Text>
               </SubHeaderRowWrapper>
               {deductions.map(([x, y]) => (
                  <SubRowWrapper>
                     <Text>{x}</Text>
                     <Text>{y}</Text>
                  </SubRowWrapper>
               ))}
            </SubTableWrapper>
            <div></div>
            <SubRowWrapper noBorder>
               <Text fontFamily="semibold">Net Pay</Text>
               <Text fontFamily="semibold">{netPay}</Text>
            </SubRowWrapper>
         </Grid>
      </TableRowCollapse>
   );
};

const payTableProps: PayTableProps = {
   deductions: [
      ["Income Tax", "1,500"],
      ["Leaves", ""],
      ["Load Deduction", "1,500"],
      ["Others", "1,500"],
      ["Total Deductions", "95,980"],
   ],
   collapsible: true,
   earnings: [
      ["Gross Pay", "95,000"],
      ["Commissions", "-"],
      ["Commissions", "-"],
      ["Other", "2,480"],
      ["Total Earnings", "97,480"],
   ],
   headings: ["July 2021", "Ammar Qaiser", "03/03/21"],
   netPay: "95,980",
};

const payTables: PayTableProps[] = repeat({ ...payTableProps }, 2);

export interface AccountRecieveablesProps {}

const PaysTab: React.FC = () => {
   return (
      <Flexbox style={{ overflowY: "auto", height: "100%" }} column padding="2rem 0rem" fullWidth>
         <UnderlinedHeading>
            <Text size={13} fontFamily="semibold">
               Monthly Sturucture
            </Text>
         </UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Gross Pay</Text>
               <Text>95,000</Text>
            </Paragraph>

            <Paragraph>
               <Text>Income Tax</Text>
               <Text>1,500</Text>
            </Paragraph>

            <Paragraph>
               <Text>Pay Date</Text>
               <Text>Third of each Month</Text>
            </Paragraph>
         </Grid>
         <Tabs titles={["Upcomming", "Past"]}>
            <div></div>
            <Flexbox column fullWidth>
               {/* <HeaderRowWrapper>
                  <Text>Month</Text>
                  <Text>Paid By</Text>
                  <Text>Date</Text>
               </HeaderRowWrapper> */}
               <TableRowCollapse
                  rowItems={["Month", "Paid by", "Date"]}
                  showArrow={true}
                  invisibleArrow
                  arrowGap={32}
                  WrapperComponent={HeaderRowWrapper}
               ></TableRowCollapse>
               {payTables.map((table) => (
                  <PayTable {...table}></PayTable>
               ))}
            </Flexbox>
         </Tabs>
      </Flexbox>
   );
};

export default PaysTab;
