import { useState } from "react";
import { StyledComponent } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import Text from "../StyledComponents/Text";
import Flexbox from "../StyledComponents/Flexbox";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
interface TableRowCollapseProps {
   label: string | JSX.Element;
   WrapperComponent: StyledComponent<"div", any>;
   showArrow?: boolean;
   arrowGap?: number;
   balance?: string;
   showMenuIcon?: boolean;
}

const TableRowCollapse: React.FC<TableRowCollapseProps> = ({
   label,
   children,
   WrapperComponent,
   showArrow,
   arrowGap = 0,
   balance,
   showMenuIcon,
}) => {
   const [open, setOpen] = useState(false);
   return (
      <>
         <WrapperComponent onClick={() => setOpen(!open)}>
            <Flexbox fullWidth justify="space-between">
               <Flexbox>
                  {showArrow && <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>}
                  {showMenuIcon && (
                     <IconButton style={{ marginLeft: arrowGap / 2, padding: 0 }}>
                        {" "}
                        <MoreVertIcon fontSize="small"></MoreVertIcon>
                     </IconButton>
                  )}
                  <Text ml={showMenuIcon ? arrowGap / 2 : arrowGap}>{label}</Text>
               </Flexbox>
               <Text>{balance}</Text>
            </Flexbox>
         </WrapperComponent>
         {open ? children : null}
      </>
   );
};

export default TableRowCollapse;
