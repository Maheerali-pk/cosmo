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
   grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      text-align: center;
      font-size: ${toRem(13)};
   }

   & > ${Text}:nth-child(1) {
      text-align: left;
   }
   & > ${Text}:nth-child(7),
   & > ${Text}:nth-child(8) {
      text-align: right !important;
   }
   sup {
      font-size: 0.55rem;
   }
`;

// const HeadingsWrapper = styled(RowWrapper)``;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         <Text size={13} isLink>
            {items[0]}
         </Text>
         <div></div>
         {items.slice(1).map((item) => (
            <Text style={{ textAlign: "center" }} size={13}>
               {item}
            </Text>
         ))}
      </RowWrapper>
   );
};
const FooterRowWrapper = styled(RowWrapper)`
   padding: 0 2rem;
   text-align: center;
   ${Text} {
      padding: ${toRem(10)} 0;
   }
   border: none;
`;

const FooterSubRowWrapper = styled(RowWrapper)`
   text-align: right;
   border: none;
   padding: 0 2rem;
`;

const HeadingsRow = () => {
   const headings = ["Name", "", "Future", "0-30", "31-60", "61-90", "Over 90", "Total"];
   return (
      <RowWrapper style={{ overflowY: "scroll", background: colors.headingBackground }}>
         <Text>Name</Text>
         <Text></Text>
         <Text>Future</Text>
         <Text>0-30</Text>
         <Text>31-60</Text>
         <Text>61-90</Text>
         <Text style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ transform: "translate(50%)", width: "fit-content" }}>Over 90</div>
         </Text>
         <Text style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ transform: "", width: "fit-content" }}>Total</div>
         </Text>
      </RowWrapper>
   );
};

const Footer = () => {
   return (
      <>
         <FooterRowWrapper style={{ textAlign: "center", fontSize: toRem(13) }}>
            <Text>Total</Text>
            <div></div>
            <Text>360,000</Text>
            <Text>325,000</Text>
            <Text>620,000</Text>
            <Text>2,400,000</Text>
            <Text style={{ borderBottom: `1px solid ${colors.tableFooterHrColor}` }}>850,000</Text>
            <Text style={{ borderBottom: `1px solid ${colors.tableFooterHrColor}` }}>4,555,000</Text>
         </FooterRowWrapper>
         <FooterSubRowWrapper style={{ paddingTop: toRem(10) }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Text>Allowance for bad debt</Text>
            <Text>
               PKR 55,000<sup> PKR</sup>
            </Text>
         </FooterSubRowWrapper>
         <FooterSubRowWrapper style={{ marginBottom: "4rem" }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Text fontFamily="semibold">Net Receivables</Text>
            <Text fontFamily="semibold">
               PKR 4,500,000<sup> PKR</sup>
            </Text>
         </FooterSubRowWrapper>
      </>
   );
};

const rowsData: string[][] = repeat(["Century Pharmaceuticals", "0", "10", "360,0000", "5000000", "0", "90"], 30);
const rowsData2: string[][] = repeat(["Cent fdsaf", "0", "10", "360,0000", "500", "0", "90"], 30);

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
            {rowsData.concat(rowsData2).map((row) => (
               <Row items={row}></Row>
            ))}
         </TableBody>
         <Footer></Footer>
      </>
   );
};

export default Table;
