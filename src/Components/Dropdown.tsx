import {
   MenuItem,
   Select as MUISelect,
   SelectProps as MUISelectProps,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Menu from "@material-ui/core/Menu";
import {
   ChevronRight,
   KeyboardArrowDown,
   KeyboardArrowRight,
} from "@material-ui/icons";
import { useState } from "react";
import styled, { CSSProperties, StyledComponent } from "styled-components";
import { fonts, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import NestedMenuItem from "./NestedMenuItem";
export interface SelectOption {
   text: string;
   icon?: JSX.Element;
   onClick: () => void;
   subItems?: SelectOption[];
}
export interface SelectProps extends MUISelectProps {
   items: SelectOption[];
   wrapperWidth?: string;
   menuWidth?: number | string;
   showDropdownIcon?: boolean;
   style?: CSSProperties;

   label: string | JSX.Element;
   labelStyles?: CSSProperties;
   ButtonWrapper?: React.FC | StyledComponent<any, any>;
   buttonVariant?: "text" | "outlined" | "contained";
   ButtonJSX?: React.ReactElement;
}
const SelectButton = styled(Flexbox)`
   text-align: left;
   justify-content: space-between;
   border-radius: 3px !important;
   background-color: white !important;
   cursor: pointer;
   padding: ${toRem(4.5)} ${toRem(9.23)};

   border: 1px solid #c4d0da;
   height: ${toRem(28)};
   ${Text} {
      color: #8d9ba8;
      font-size: ${toRem(12)};
   }
   svg {
      color: #8d9ba8;
   }
   width: 100%;
`;
const MenuItemWrapper = styled(MenuItem)`
   font-size: ${toRem(12)} !important;
   min-height: ${toRem(30)} !important;
   padding: 0.5rem ${toRem(14)} !important;
   color: #8d9ba8 !important;
   position: relative;
   &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      height: 1px;
      background: #e6eaee;
      opacity: 0.5;
      transition: opacity 0.3s ease-in;
   }
   &:hover {
      background-color: rgba(236, 239, 243, 0.22) !important;
   }
   font-family: ${fonts.regular} !important;
`;
const MenuWrapper = styled(Menu)`
   // box-shadow: 0 8px 27px 0 rgb(176 186 195 / 33%);
   // border: 1px solid #d6dde5;
   // border-radius: 5px;
`;

const Dropdown: React.FC<SelectProps> = ({
   label,
   items,
   wrapperWidth,
   menuWidth = 200,
   ButtonWrapper,
   ButtonJSX,
   MenuProps,
   ...rest
}) => {
   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
   const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);
   const [open, setOpen] = useState(false);

   return (
      <>
         {ButtonJSX ? (
            <div
               onClick={(e: any) => setAnchorEl(e.currentTarget as HTMLElement)}
            >
               {ButtonJSX}
            </div>
         ) : (
            <SelectButton>
               <Text>{label}</Text>
            </SelectButton>
         )}
         <MenuWrapper
            PaperProps={{
               style: {
                  width: menuWidth,
                  borderRadius: "5px",
                  boxShadow: "0 8px 27px 0 rgb(176 186 195 / 33%)",

                  border: "1px solid #c4d0da",
               },
            }}
            style={{ width: menuWidth }}
            open={Boolean(anchorEl)}
            anchorOrigin={{
               vertical: "top",
               horizontal: "left",
            }}
            transformOrigin={{
               vertical: (anchorEl?.getBoundingClientRect().top || 0) - 80,
               horizontal: "left",
            }}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            {...MenuProps}
         >
            {items.map((x) =>
               !x.subItems ? (
                  <MenuItemWrapper
                     onClick={(e) => {
                        setOpen(false);
                        setAnchorEl(null);
                     }}
                  >
                     <Flexbox mr={10}>{x.icon}</Flexbox> {x.text}{" "}
                     {x.subItems && (
                        <ChevronRight
                           style={{ fontSize: "10px" }}
                        ></ChevronRight>
                     )}
                  </MenuItemWrapper>
               ) : (
                  <NestedMenuItem
                     parentMenuOpen={Boolean(anchorEl)}
                     onClick={(e) => {
                        setOpen(false);
                        setAnchorEl(null);
                     }}
                     //@ts-ignore
                     MenuProps={{
                        style: { boxShadow: "none" },
                        transformOrigin: {
                           horizontal: "left",
                           vertical: "top",
                        },
                        anchorOrigin: {
                           horizontal: "right",
                           vertical: "top",
                        },
                        PaperProps: {
                           style: {
                              boxShadow: "none",
                              border: "1px solid #c4d0da",
                              marginLeft: "-5px",
                           },
                        },
                     }}
                     rightIcon={<></>}
                     style={{ padding: "0" }}
                     label={
                        <MenuItemWrapper>
                           <Flexbox mr={10}>{x.icon}</Flexbox> {x.text}{" "}
                           {x.subItems && (
                              <ChevronRight
                                 style={{ fontSize: "10px" }}
                              ></ChevronRight>
                           )}
                        </MenuItemWrapper>
                     }
                  >
                     {x.subItems.map((a) => (
                        <MenuItemWrapper>{a.text}</MenuItemWrapper>
                     ))}
                  </NestedMenuItem>
               )
            )}
         </MenuWrapper>
      </>
   );
};

export default Dropdown;
