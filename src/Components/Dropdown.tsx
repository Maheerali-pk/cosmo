import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { CSSProperties } from "react";
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
   style?: CSSProperties;
   labelStyles?: CSSProperties;
   ButtonWrapper?: React.FC;
   buttonVariant?: "text" | "outlined" | "contained";
}

const DropdownButton = styled(Button)`
   background-color: transparent;
`;

const Dropdown: React.FC<DropdownProps> = ({
   label,
   buttonVariant,
   items,
   showDropdownIcon = true,
   style = {},
   labelStyles = {},
}) => {
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
         <DropdownButton
            className="dropdown-btn"
            variant={buttonVariant || "text"}
            style={{ padding: "0", minWidth: "fit-content", ...style }}
            onClick={handleClick}
         >
            <Text fontFamily="regular" size={16} style={{ ...labelStyles }}>
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
