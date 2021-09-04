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
   grid-template-columns: auto 2fr repeat(6, 1fr);
   place-items: center;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
`;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         <Text size={13} color={"bueLink"}>
            {items[0]}
         </Text>
         <div></div>
         {items.slice(1).map((item) => (
            <Text size={13}>{item}</Text>
         ))}
      </RowWrapper>
   );
};

const rowsData: string[][] = repeat(["Century Pharmaceuticals", "0", "10", "360,0000", "5000000", "0", "90"], 30);

const Table: React.FC<TableProps> = () => {
   return (
      <Flexbox column fullWidth>
         {rowsData.map((row) => (
            <Row items={row}></Row>
         ))}
      </Flexbox>
   );
};

export default Table;
