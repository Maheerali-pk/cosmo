import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MUISelect,
   SelectProps as MUISelectProps,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Menu from "@material-ui/core/Menu";
import { KeyboardArrowDown } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { fonts, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
export interface SelectOption {
   text: string;
   value: string;
}
export interface SelectProps extends MUISelectProps {
   options: SelectOption[];
   label?: string;
   onValueChange: (option: string) => void;
   value: string;
   wrapperWidth?: string;
   menuWidth?: number | string;
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
const SelectInput = styled(Input)``;

const CustomSelect: React.FC<SelectProps> = ({
   onValueChange,
   label,
   options,
   value,
   wrapperWidth,
   menuWidth = 200,
   ...rest
}) => {
   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
   const [open, setOpen] = useState(false);

   return (
      <Flexbox column gap={5} fullWidth>
         <Text size={9}>{label}</Text>
         <SelectButton
            onClick={(e) => setAnchorEl(e.currentTarget as HTMLElement)}
         >
            <Text>{value}</Text>
            <KeyboardArrowDown></KeyboardArrowDown>
         </SelectButton>
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
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
            transformOrigin={{ horizontal: "left", vertical: "top" }}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
         >
            {options.map((x) => (
               <MenuItemWrapper
                  onClick={(e) => {
                     setOpen(false);
                     setAnchorEl(null);
                     onValueChange(x.value);
                  }}
               >
                  {x.text}
               </MenuItemWrapper>
            ))}
         </MenuWrapper>
         {/* <SelectInput  disableUnderline value={value}></SelectInput> */}
         {/* <MUISelect
            {...rest}
            disableUnderline
            onChange={(e) => {
               onValueChange(e.target.value as string);
            }}
            // onFocus={(e) => {
            //    setAnchorEl(e.target as HTMLInputElement);
            // }}
            onOpen={(e) => {
               setAnchorEl(e.target as HTMLInputElement);
            }}
            onClose={(e) => {
               setAnchorEl(undefined);
            }}
            value={value}
            MenuProps={{
               anchorOrigin: { horizontal: "left", vertical: "top" },
               transformOrigin: { horizontal: "left", vertical: "bottom" },
               anchorEl: anchorEl,
            }}
         >
            {options.map((option) => (
               <MenuItem value={option.value}>{option.text}</MenuItem>
            ))}
         </MUISelect> */}
      </Flexbox>
   );
};

export default CustomSelect;
