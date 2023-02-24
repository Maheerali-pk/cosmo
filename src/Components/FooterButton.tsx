import {
   Button,
   ButtonGroup,
   Menu,
   MenuItem,
   MenuProps,
   MenuClassKey,
} from "@material-ui/core";
import ButtonGroupRadio from "./ButtonGroupRadio";
import { MoreHorizOutlined } from "@material-ui/icons";
import * as React from "react";
import { colors } from "../Helpers/utils";
import { makeStyles } from "@material-ui/core/styles";

interface IMenuItem {
   text: string;
   onClick: () => void;
}
interface FooterButtonProps {
   color?: "primary" | "secondary";
   hasMenu?: boolean;
   menuItems?: IMenuItem[];
   onClick: () => void;
   text: string;
}
// const useStyles = useStyle
const useStyles = makeStyles<{}, MenuProps, MenuClassKey>((theme) => ({
   paper: { backgroundColor: colors.bluePrimary },
   list: {},
}));
const FooterButton: React.FC<FooterButtonProps> = ({
   color = "primary",
   hasMenu,
   menuItems,
   text,
   onClick,
}) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
      // item.onClick();
   };

   if (hasMenu) {
      return (
         <>
            <ButtonGroup variant="contained" color={color}>
               <Button onClick={onClick}>{text}</Button>
               <Button onClick={handleClick}>
                  <MoreHorizOutlined></MoreHorizOutlined>
               </Button>
            </ButtonGroup>
            <Menu
               color={color}
               //@ts-ignore
               MenuListProps={{
                  className: "menu-list-" + color,
                  style: {
                     borderTopLeftRadius: "5px",
                     borderTopRightRadius: "5px",
                     borderBottomRightRadius: "0px",
                     borderBottomLeftRadius: "0px",
                     boxShadow: "none",
                  },
               }}
               // PopoverClasses={classes.paper}
               // PopoverClasses={classes.root}
               className="menu-primary"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               keepMounted
               onClose={handleClose}
               anchorOrigin={{ vertical: "top", horizontal: "right" }}
               transformOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
               {menuItems?.map((item) => (
                  <MenuItem
                     // button
                     // ContainerProps={{ color: "primary" }}
                     className={`menu-item-${color}`}
                     onClick={() => {
                        item.onClick();
                        handleClose();
                     }}
                  >
                     {item.text}
                  </MenuItem>
               ))}
            </Menu>
         </>
      );
   } else {
      return (
         <Button variant="contained" color={color} onClick={onClick}>
            {text}
         </Button>
      );
   }
};

export default FooterButton;
