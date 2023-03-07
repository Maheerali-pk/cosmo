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
import { Close, DragIndicator, SignalCellular0Bar } from "@material-ui/icons";
import CustomDrawer from "../Components/CustomDrawer";
import Text from "../StyledComponents/Text";
import CustomSelect from "../Components/CustomSelect";
import { useState } from "react";

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
   padding: 1.5rem 1.5rem 1.5rem;
   padding-bottom: 0;
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

const OrderButton = styled(Button)`
   padding: 0 !important;
   min-width: ${toRem(30)};
   height: ${toRem(30)};
   display: flex;
   align-items: center;
   /* justify-content-center; */
   border: none !important;
   svg {
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
   { title: "Action", checked: false, id: "6" },
   { title: "Action", checked: false, id: "7" },
   { title: "Action", checked: false, id: "8" },
   { title: "Action", checked: false, id: "9" },
   { title: "Action", checked: false, id: "10" },
   { title: "Action", checked: false, id: "11" },
   { title: "Action", checked: false, id: "12" },
   { title: "Action", checked: false, id: "13" },
   { title: "Action", checked: false, id: "14" },
   { title: "Action", checked: false, id: "15" },
   { title: "Action", checked: false, id: "16" },
];

const CustomizeList: React.FC<GoodReceivedNoteProps> = () => {
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
         <Heading>Customize Lisnt</Heading>

         <Body fullWidth style={{ overflowY: "auto" }} column>
            <Grid
               style={{ height: "auto" }}
               columns="1fr 2fr 1fr"
               align="end"
               gap="0.55rem"
               fullWidth
            >
               <CustomSelect
                  label="PAGE SIZE"
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
               <CustomSelect
                  label="SORT BY:"
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
               <ButtonGroup size="small" variant="contained" color="secondary">
                  <OrderButton>
                     <SignalCellular0Bar></SignalCellular0Bar>
                  </OrderButton>
                  <OrderButton style={{ borderRight: "none" }}>
                     <SignalCellular0Bar></SignalCellular0Bar>
                  </OrderButton>
               </ButtonGroup>
            </Grid>
            <Flexbox
               style={{ overflowY: "auto", overflowX: "hidden" }}
               column
               fullWidth
               overflowAuto
            >
               <Flexbox column fullWidth mt={22} mb={22}>
                  {filterItems.map((x) => (
                     <FilterItemWrapper
                        fullWidth
                        style={{
                           background: x.checked
                              ? "white"
                              : "rgba(255,255,255, 0.6)",
                        }}
                     >
                        <Flexbox gap={15}>
                           <Flexbox width={34} justify="center">
                              <DragIndicator></DragIndicator>
                           </Flexbox>
                           <Text size={12}>{x.title}</Text>
                        </Flexbox>
                        <Flexbox gap={16} mr={8}>
                           <ColorIconWrapper>
                              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5Hcm91cCA2OTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkN1c3RvbWl6ZS1FWGxpc3QtTkVXLUNvcHktNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MDguMDAwMDAwLCAtNDU1LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDA4LjAwMDAwMCwgNDU1LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTEzIiBmaWxsPSIjMkU4OEYyIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OyIgY3g9IjQuODg2MzYzNjQiIGN5PSI0Ljg4NjM2MzY0IiByPSI0Ljg4NjM2MzY0Ij48L2NpcmNsZT4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0xMy1Db3B5IiBmaWxsPSIjRkYyMjNEIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OyIgY3g9IjEwLjExMzYzNjQiIGN5PSI0Ljg4NjM2MzY0IiByPSI0Ljg4NjM2MzY0Ij48L2NpcmNsZT4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0xMy1Db3B5LTIiIGZpbGw9IiM2NEMwMDciIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBjeD0iNy4xNTkwOTA5MSIgY3k9IjkuMjA0NTQ1NDUiIHI9IjQuODg2MzYzNjQiPjwvY2lyY2xlPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg=="></img>
                           </ColorIconWrapper>
                           <Switch
                              onChange={(e) =>
                                 onFilterItemChange(e.target.checked, x.id)
                              }
                              checked={x.checked}
                           ></Switch>
                        </Flexbox>
                     </FilterItemWrapper>
                  ))}
               </Flexbox>
               <Flexbox ml={12} mb={20}>
                  <FormGroup>
                     <FormControlLabel
                        control={<Checkbox />}
                        label={
                           <Text ml={8} size={12} color={"grayHeading"}>
                              Apply these settings for all users
                           </Text>
                        }
                     />
                  </FormGroup>
               </Flexbox>
            </Flexbox>
         </Body>
         <Flexbox px={24} pb={30} gap={16}>
            <Button color="primary" variant="contained">
               Save
            </Button>
         </Flexbox>
      </Wrapper>
   );
};

export default CustomizeList;
