import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import Text from "../StyledComponents/Text";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styled from "styled-components";
interface DropdownItem {
   text: string;
   onClick: () => void;
}

interface DropdownProps {
   label: string;
   items: DropdownItem[];
}

const DropdownButton = styled(Button)`
   background-color: transparent !important;
`;

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = (item: DropdownItem) => {
      setAnchorEl(null);
      // item.onClick();
   };

   return (
      <>
         <DropdownButton variant="text" onClick={handleClick}>
            <Text fontFamily="regular" size={13}>
               {label}
            </Text>
            <ArrowDropDownIcon></ArrowDropDownIcon>
         </DropdownButton>
         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={handleClose}>
            {items.map((item) => (
               <MenuItem onClick={() => handleClose(item)}>{item.text}</MenuItem>
            ))}
         </Menu>
      </>
   );
};

export default Dropdown;
