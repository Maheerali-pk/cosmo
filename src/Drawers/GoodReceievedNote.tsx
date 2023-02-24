import styled from "styled-components";
import { colors } from "../Helpers/utils";
import Table from "../Pages/AccountRecieveables/Table";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import { Drawer } from "@material-ui/core";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { Close } from "@material-ui/icons";
import CustomDrawer from "../Components/CustomDrawer";

interface GoodReceivedNoteProps {}
interface ICell {
   text: string;
   onClick?: () => void;
   isLink?: boolean;
}
interface IRow {
   cells: ICell[];
}
interface IData {
   rows: IRow[];
}

const data: IData = {
   rows: [
      {
         cells: [
            { text: "GDN0001", onClick: () => {} },
            { text: "Dec 29, 2020" },
            { text: "a" },
            { text: "Alex Ferguson" },
            { text: "INV0051", onClick: () => {} },

            { text: "Overdue" },
         ],
      },
   ],
};
const Wrapper = styled(Flexbox)`
   background: ${colors.drawerBackground};
   position: relative;
   box-shadow: 0 0 25px 0px rgb(0 0 0 / 30%);
`;

const Heading = styled(Flexbox)`
   padding: 25px 25px 25px;
   font-size: 10px;
   color: #1d252c;
`;
const Body = styled(Flexbox)`
   padding: 1.5rem;
`;
const TableWrapper = styled(Flexbox)``;
const RowWrapper = styled(Grid)`
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
   color: #1d252c;
   font-size: 0.75rem;
   padding: 0.25rem 1rem;
   & div:nth-child(1),
   & div:nth-child(5) {
      color: #1071e3;
      cursor: pointer;
   }
   background: white;
`;
const HeaderRowWrapper = styled(RowWrapper)`
   background: transparent;
   border-bottom: 1px solid #6f7277;
   & div {
      color: #1d252c !important;
   }
`;
const DrawerCloseWrapper = styled(Flexbox)`
   background: transparent;
   align-items: flex-start;
   height: 100%;
   padding-top: 13px;
`;
const DrawerClose = styled(Flexbox)`
   background: ${colors.drawerBackground};
   border-radius: 50% 0 0 50%;
   height: 45px;
   width: 45px;
   cursor: pointer;
`;

const WrapperWrapper = styled(Flexbox)`
   position: relative;
   height: 100%;
   width: 100%;
   background: transparent;
`;

const GoodReceivedNote: React.FC<GoodReceivedNoteProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Wrapper column fullHeight fullWidth>
         <Heading>Good Delivered Note</Heading>
         <Body fullWidth>
            <TableWrapper fullWidth column>
               <HeaderRowWrapper fullWidth>
                  <div>Number</div>
                  <div>Number</div>
                  <div>Number</div>
                  <div>Number</div>
                  <div>Number</div>
                  <div>Number</div>
               </HeaderRowWrapper>
               {data.rows.map((row) => (
                  <RowWrapper fullWidth>
                     {row.cells.map((cell) => (
                        <div onClick={cell.onClick}>{cell.text}</div>
                     ))}
                  </RowWrapper>
               ))}
            </TableWrapper>
         </Body>
      </Wrapper>
   );
};

export default GoodReceivedNote;
