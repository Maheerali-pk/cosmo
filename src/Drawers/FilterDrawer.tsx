import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Table from "../Pages/AccountRecieveables/Table";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import {
   Button,
   ButtonGroup,
   Checkbox,
   Drawer,
   FormControlLabel,
   FormGroup,
   Switch,
} from "@material-ui/core";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import {
   Close,
   DragIndicator,
   KeyboardArrowDown,
   SignalCellular0Bar,
} from "@material-ui/icons";
import CustomDrawer from "../Components/CustomDrawer";
import Text from "../StyledComponents/Text";
import CustomSelect from "../Components/CustomSelect";
import { useState } from "react";
import FilterCard from "../Components/FilterCard";
import FilterCardMain from "../Components/FilterCardMain";
import Dropdown from "../Components/Dropdown";

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
   padding-bottom: 0;
   font-size: 12px;
   color: #1d252c;
`;
const Body = styled(Flexbox)`
   padding: 1.5rem;
   padding-right: 2.5rem;
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
const SelectsRowWrapper = styled(Grid)`
   grid-template-columns: ;
`;

const OrderButton = styled(Button)`
   padding: 0 !important;
   min-width: ${toRem(30)};
   height:  ${toRem(30)};
   display:flex;
   align-items:center;
   justify-content-center;
   border:none !important;
   svg{
      font-size: 15px;
   }
       background-color: #f7f9fa;
`;

const FilterItemWrapper = styled(Flexbox)`
   background: white;
   border: 1px solid #c4d0da;
   border-radius: 5px;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-height: ${toRem(34)};
   border-radius: 5px;
   margin: 4px 2px;
   & ${Text} {
      color: #536677;
   }
`;
const ColorIconWrapper = styled(Flexbox)`
   opacity: 0.7;
   min-width: ${toRem(30)};
   align-items: center;
   justify-content: center;
   &:hover {
      opacity: 1;
   }
   transition: opacity 0.3s;
`;
interface IFilterItem {
   checked: boolean;
   title: string;
   id: string;
}
const initialFilterItems: IFilterItem[] = [
   { title: "Action", checked: false, id: "0" },
   { title: "Action", checked: false, id: "1" },
   { title: "Action", checked: false, id: "2" },
   { title: "Action", checked: false, id: "3" },
   { title: "Action", checked: false, id: "4" },
   { title: "Action", checked: false, id: "5" },
];
const FilterCardsWrapper = styled(Grid)``;
const AddButtonWrapper = styled(Button)`
   background-color: ${colors.green} !important;
   &:hover {
      background-color: #229544 !important;
   }
`;

const FilterDrawer: React.FC<GoodReceivedNoteProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const [pageSize, setPageSize] = useState("10");
   const [filterItems, setFilterItems] = useState(initialFilterItems);
   const onFilterItemChange = (value: boolean, id: string) => {
      setFilterItems((x) =>
         filterItems.map((x) => (x.id === id ? { ...x, checked: value } : x))
      );
   };
   return (
      <Wrapper column fullHeight fullWidth>
         <Heading>Filter</Heading>

         <Body fullWidth column>
            <Grid mb={10} noOfColumns={2} fullWidth>
               <CustomSelect
                  label="VIEW SAVED FILTERS"
                  options={[
                     { text: "10", value: "10" },
                     { text: "20", value: "20" },
                     { text: "30", value: "30" },
                     { text: "40", value: "40" },
                     { text: "50", value: "50" },
                  ]}
                  fullWidth
                  value={pageSize}
                  onValueChange={(val) => setPageSize(val)}
               ></CustomSelect>
               <Flexbox justify="end">
                  <Flexbox>
                     <Dropdown
                        items={[
                           { text: "Item 1", onClick: () => {} },
                           { text: "Item 1", onClick: () => {} },
                           { text: "Item 1", onClick: () => {} },
                        ]}
                        label="Add"
                        ButtonJSX={
                           <AddButtonWrapper
                              variant="contained"
                              color="primary"
                              style={{ backgroundColor: colors.green }}
                           >
                              Add
                              <KeyboardArrowDown
                                 style={{
                                    fontSize: "15px",
                                    marginLeft: "0.25rem",
                                 }}
                              ></KeyboardArrowDown>
                           </AddButtonWrapper>
                        }
                     ></Dropdown>
                  </Flexbox>
               </Flexbox>
            </Grid>

            <Grid fullWidth columns="1fr 1fr" gap={"1.25rem"}>
               <FilterCard
                  heading="Customer"
                  items={[
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                  ]}
               ></FilterCard>
               <FilterCard
                  heading="Customer"
                  items={[
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                  ]}
               ></FilterCard>
               <FilterCard
                  heading="Customer"
                  items={[
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                  ]}
               ></FilterCard>
               <FilterCard
                  heading="Customer"
                  items={[
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                  ]}
               ></FilterCard>
               <FilterCard
                  heading="Customer"
                  items={[
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                     { text: "Item 1", label: "1" },
                  ]}
               ></FilterCard>
               <FilterCardMain></FilterCardMain>
            </Grid>
         </Body>
      </Wrapper>
   );
};

export default FilterDrawer;
