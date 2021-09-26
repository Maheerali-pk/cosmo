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
   label: string | JSX.Element;
   items: DropdownItem[];
   showDropdownIcon?: boolean;
}

const DropdownButton = styled(Button)`
   background-color: transparent !important;
`;

const Dropdown: React.FC<DropdownProps> = ({ label, items, showDropdownIcon = true }) => {
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
         <DropdownButton variant="text" style={{ padding: "0", minWidth: "fit-content" }} onClick={handleClick}>
            <Text fontFamily="regular" size={16}>
               {label}
            </Text>
            {showDropdownIcon ? <ArrowDropDownIcon></ArrowDropDownIcon> : null}
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
