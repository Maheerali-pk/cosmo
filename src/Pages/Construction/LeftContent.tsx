import styled from "styled-components";
import { colors, repeat, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Grid from "../../StyledComponents/Grid";
import Paragraph from "../../StyledComponents/Paragraph";
import Text from "../../StyledComponents/Text";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton, TextField } from "@material-ui/core";
import Comment from "../../Components/Comment";
const RowWrapper = styled(Grid)`
   width: 100%;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   grid-template-columns: 0.5fr 1fr 3fr 1fr 1fr 1fr 1.25fr 0.25fr;
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   sup {
      font-size: 0.7rem;
   }
`;

const tableRows: string[][] = repeat(
   ["1", "Inventory", "Construction Material 1", "1", "Unit", "64,200.00", "64,200.00"],
   3
);

const TableRow: React.FC<{ items: string[] }> = ({ items }) => {
   return (
      <RowWrapper>
         {items.map((item) => (
            <Text>{item}</Text>
         ))}
         <IconButton style={{ padding: "0em" }}>
            <MoreHorizIcon fontSize="small"></MoreHorizIcon>
         </IconButton>
      </RowWrapper>
   );
};
const TableHeadings = () => {
   return (
      <RowWrapper>
         <Text>Sr</Text>
         <Text>Type</Text>
         <Text>Item</Text>
         <Text>Qty</Text>
         <Text>UOM</Text>
         <Text>Rate</Text>
         <Text>Amount</Text>
         <Text></Text>
      </RowWrapper>
   );
};

const TableFooterWrapper = styled(RowWrapper)`
   border: none;
   ${Text} {
      font-size: ${toRem(16)};
   }
`;
const TableFooter = () => {
   return (
      <TableFooterWrapper>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <Text fontFamily="semibold" size={16}>
            Total
         </Text>
         <Text fontFamily="semibold" size={16}>
            89,342.00 <sup>PKR</sup>
         </Text>
      </TableFooterWrapper>
   );
};

const LeftContent: React.FC = () => {
   return (
      <Flexbox column fullWidth>
         <UnderlinedHeading>About</UnderlinedHeading>
         <Paragraph mb={40}>
            <Text>Description</Text>
            <Text>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae inventore vero quae accusamus
               delectus error modi nobis dolorum porro dignissimos quis autem, odio quas. Ex vel magni, libero inventore
               dolorum expedita, id optio fuga quo error repudiandae harum eum eligendi tempora saepe quae iste quam
               <br />
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora magnam facere doloribus dolore
               enim animi blanditiis rem aliquid inventore, natus corporis eos quod provident rerum earum saepe
               dignissimos! Deserunt vel ratione in esse. Maiores, obcaecati rerum aliquid culpa harum iure nostrum rem
            </Text>
         </Paragraph>

         <UnderlinedHeading>Expenses</UnderlinedHeading>
         <Flexbox column fullWidth>
            <TableHeadings />
            {tableRows.map((row) => (
               <TableRow items={row}></TableRow>
            ))}
            <TableFooter></TableFooter>
         </Flexbox>
         <Text mb={40} underline size={13}>
            Add Item
         </Text>
         <UnderlinedHeading mb={10}>Comments</UnderlinedHeading>
         <TextField
            rows={2}
            placeholder="Add a comment"
            multiline
            fullWidth
            variant="outlined"
            InputProps={{ style: { fontSize: toRem(13), padding: `${toRem(5)} ${toRem(8)}` } }}
         ></TextField>
         <Comment
            time="2 days ago"
            user={{
               name: "Mustafa Sohail",
               image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            text="kindly confirm the required changes and update the stage."
            repliedUser="Ehtisham Ali"
         ></Comment>
      </Flexbox>
   );
};

export default LeftContent;
