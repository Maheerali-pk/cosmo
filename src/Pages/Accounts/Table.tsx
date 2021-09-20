import styled from "styled-components";
import { colors, repeat, toRem } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";

export interface TableProps {}

export interface RowProps {
   items: string[];
}
const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1.5fr 1.5fr 1.5fr 1.5fr 2fr 3fr 3fr 2fr 2fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }

   & > ${Text}:nth-child(9),
   & > ${Text}:nth-child(10) {
      text-align: right !important;
   }
   sup {
      font-size: 0.55rem;
   }
`;

interface RowGroupProps {
   id: string;
   type: string;
   date: string;
   Ref: string;
   For: string;
   name: string;
   remarks: string[];
   accounts: string[];
   debits: string[];
   credits: string[];
   totalUSDCredit: string;
   totalPKRCredit: string;
   totalUSDDebit: string;
   totalPKRDebit: string;
}

const rowGroups: RowGroupProps[] = [
   ...repeat(
      {
         id: "125",
         type: "Invoice",
         date: "05/07/19",
         Ref: "INV-00297",
         For: "Customer",
         name: "Kiwi Creations",
         remarks: ["Website Development", "Website Design & Development", "Hosting Charges"],
         accounts: ["Accounts Receivables", "Web Development (Income)", "Server Hosting (Income)"],
         credits: ["", "250,000.00", "54,500.00"],
         debits: ["250,000.00", "", ""],
         totalPKRCredit: "300,000.00",

         totalPKRDebit: "300,000.00",
         totalUSDDebit: "200.00",
         totalUSDCredit: "200.00",
      },
      5
   ),
];

const TotalWrapper = styled(Text)`
   padding-top: ${toRem(10)};
   padding-bottom: ${toRem(10)};
`;

const BorderTextWrapper = styled(TotalWrapper)`
   border: 1px solid #707070;
   border-left: none;
   border-right: none;
`;

const HeadingsRowWrapper = styled(RowWrapper)`
   /* & > ${Text}:nth-child(9),
   & > ${Text}:nth-child(10) {
      text-align: center !important;
   } */
`;

const RowGroup: React.FC<RowGroupProps> = ({
   id,
   type,
   date,
   Ref,
   For,
   name,
   remarks,
   accounts,
   debits,
   credits,
   totalPKRCredit,
   totalPKRDebit,
   totalUSDDebit,
   totalUSDCredit,
}) => {
   return (
      <>
         <RowWrapper>
            <Text>{id}</Text>
            <Text>{type}</Text>
            <Text>{date}</Text>
            <Text>{Ref}</Text>
            <Text>{For}</Text>
            <Text>{name}</Text>
            <Text>{remarks[0]}</Text>
            <Text>{accounts[0]}</Text>
            <Text>{debits[0]}</Text>
            <Text>{credits[0]}</Text>
         </RowWrapper>
         {remarks.slice(1).map((x, i) => (
            <RowWrapper>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <Text>{remarks[i]}</Text>
               <Text>{accounts[i]}</Text>
               <Text>{debits[i]}</Text>
               <Text>{credits[i]}</Text>
            </RowWrapper>
         ))}
         <RowWrapper style={{ paddingTop: 0, paddingBottom: "0" }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <TotalWrapper style={{ marginLeft: "70%" }} fontFamily="semibold">
               Total - USD
            </TotalWrapper>
            <BorderTextWrapper fontFamily="semibold">{totalUSDDebit}</BorderTextWrapper>
            <BorderTextWrapper fontFamily="semibold">{totalUSDCredit}</BorderTextWrapper>
         </RowWrapper>
         <RowWrapper style={{ paddingTop: 0, paddingBottom: "0" }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <TotalWrapper style={{ marginLeft: "70%" }} fontFamily="semibold">
               Total - PKR
            </TotalWrapper>
            <BorderTextWrapper style={{ borderTop: "none" }} fontFamily="semibold">
               {totalPKRDebit}
            </BorderTextWrapper>
            <BorderTextWrapper style={{ borderTop: "none" }} fontFamily="semibold">
               {totalPKRCredit}
            </BorderTextWrapper>
         </RowWrapper>
      </>
   );
};

const HeadingsRow = () => {
   return (
      <HeadingsRowWrapper style={{ overflowY: "scroll", background: colors.headingBackground }}>
         <Text>ID</Text>
         <Text>Type</Text>
         <Text>Date</Text>
         <Text>Ref</Text>
         <Text>For</Text>
         <Text>Name</Text>
         <Text>Remarks</Text>
         <Text>Account</Text>
         <Text style={{ textAlign: "center" }}>Debit</Text>
         <Text>Credit</Text>
      </HeadingsRowWrapper>
   );
};

const TableBody = styled(Flexbox)`
   overflow: auto;
   height: 100%;
   overflow-y: scroll;
`;

const Table: React.FC<TableProps> = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <TableBody column fullWidth>
            {rowGroups.map((rowGroup) => (
               <>
                  <RowGroup {...rowGroup}></RowGroup>
                  <RowWrapper>
                     <Text color="white">a</Text>
                  </RowWrapper>
               </>
            ))}
         </TableBody>
         {/* <Footer></Footer> */}
      </>
   );
};

export default Table;
