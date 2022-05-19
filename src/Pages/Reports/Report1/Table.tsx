import styled from "styled-components";
import { fonts, toEm, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import Footer from "./Footer";
import Header from "./Header";
import { IReport1Table, IRow } from "./Report1";

const RowWrapper = styled(Grid)`
   grid-template-columns: 0.2fr 2fr 0.5fr 0.5fr 1fr 1fr;
   width: 100%;
   align-items: center;
   row-gap: 0.4em;
   ${Text} {
      font-size: ${toEm(11)};
      color: black;
   }
   padding: 0.5em 0.25em;
   .name,
   .total-amount {
      font-family: ${fonts.bold};
   }
   & > ${Text}:last-child {
      text-align: right;
      font-family: ${fonts.bold} !important;
   }
   & > ${Text}:nth-child(3),
   & > ${Text}:nth-child(4),
   & > ${Text}:nth-child(5) {
      text-align: center;
   }
`;
const FooterWrapper = styled(Grid)`
   grid-template-columns: 70% 30%;
   background-color: #ededed;
   ${Text} {
      color: black;
      font-size: 0.75em;
   }
   align-items: center;
   padding: 0.5em 0.25em;
`;
const TableWrapper = styled(Flexbox)`
   border: 0.1em solid black;
`;
const HeadingsRowWrapper = styled(RowWrapper)`
   background-color: #ededed;
   ${Text} {
      font-family: ${fonts.bold};
      text-transform: uppercase;
   }
`;
const PageWrapper = styled(Flexbox)`
   ${Text} {
      color: black;
      font-family: ${fonts.semibold};
   }
`;
const HeadingsRow = () => {
   const headings = ["SN", "product name & description", "qty", "uom", "unit price", "total amount"];
   return (
      <HeadingsRowWrapper>
         {headings.map((x) => (
            <Text>{x}</Text>
         ))}
      </HeadingsRowWrapper>
   );
};

const Row: React.FC<IRow> = ({ description, name, qty, sn, totalAmount, unitPrice, uom }) => {
   return (
      <RowWrapper mb={21} em>
         <Text>{sn}.</Text>
         <Flexbox column>
            <Text className="name">{name}</Text>
            <Text>{description}</Text>
         </Flexbox>
         <Text>{qty.toFixed(2)}</Text>
         <Text>{uom}</Text>
         <Text>{unitPrice}</Text>
         <Text>{totalAmount.toFixed(3)}</Text>
      </RowWrapper>
   );
};

const Table: React.FC<IReport1Table> = (props) => {
   return (
      <TableWrapper mt={16} em column fullWidth mb={16}>
         <HeadingsRow></HeadingsRow>
         {props.rows.map((row) => (
            <Row {...row}></Row>
         ))}
         <FooterWrapper fullWidth>
            <Flexbox align="center" gap="0.5em" pl={16} em>
               <Text fontFamily="bold">Total</Text>
               <Text fontFamily="semibold">{props.totalString}</Text>
            </Flexbox>

            <Flexbox align="center" gap="0.5em" pl={16} em fullWidth justify="space-between">
               <Text fontFamily="bold">EUR</Text>
               <Text fontFamily="bold" align="right">
                  {props.total.toFixed(3)}
               </Text>
            </Flexbox>
         </FooterWrapper>
      </TableWrapper>
   );
};

export default Table;
