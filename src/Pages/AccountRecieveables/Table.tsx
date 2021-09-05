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
   grid-template-columns: 1fr 2fr repeat(6, 1fr);
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
`;

const HeadingsWrapper = styled(RowWrapper)``;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         <Text size={13} color={"bueLink"}>
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

const HeadingsRow = () => {
   const headings = ["Name", "", "Future", "0-30", "31-60", "61-90", "Over 90", "Total"];
   return (
      <RowWrapper style={{ overflowY: "scroll" }}>
         {headings.map((x) => (
            <Text size={13} style={{ textAlign: "center" }}>
               {x}
            </Text>
         ))}
      </RowWrapper>
   );
};

const rowsData: string[][] = repeat(["Century Pharmaceuticals", "0", "10", "360,0000", "5000000", "0", "90"], 30);
const rowsData2: string[][] = repeat(["Cent fdsaf", "0", "10", "360,0000", "500", "0", "90"], 30);

const TableBody = styled(Flexbox)`
   overflow: auto;
   height: 100%;
   overflow-y: scroll;
`;

const TableWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr repeat(6, 1fr);
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
      </>
   );
};

export default Table;
