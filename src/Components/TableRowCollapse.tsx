import { useState } from "react";
import { StyledComponent } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowDownIosIcon from "@material-ui/icons/KeyboardArrowDown";
import Text from "../StyledComponents/Text";
import Flexbox from "../StyledComponents/Flexbox";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
interface TableRowCollapseProps {
   WrapperComponent: StyledComponent<"div", any>;
   showArrow?: boolean;
   arrowGap?: number;
   showMenuIcon?: boolean;
   rowItems: string[];
}

const TableRowCollapse: React.FC<TableRowCollapseProps> = ({
   children,
   WrapperComponent,
   showArrow,
   arrowGap = 0,
   showMenuIcon,
   rowItems,
}) => {
   const [open, setOpen] = useState(false);
   return (
      <>
         <WrapperComponent onClick={() => setOpen(!open)}>
            <Flexbox>
               {showArrow &&
                  (open ? (
                     <ArrowDownIosIcon fontSize="small"></ArrowDownIosIcon>
                  ) : (
                     <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                  ))}
               {showMenuIcon && (
                  <IconButton style={{ marginLeft: arrowGap / 2, padding: 0 }}>
                     {" "}
                     <MoreVertIcon fontSize="small"></MoreVertIcon>
                  </IconButton>
               )}
               <Text ml={showMenuIcon ? arrowGap / 2 : arrowGap}>{rowItems[0]}</Text>
            </Flexbox>
            {rowItems && rowItems.slice(1).map((item) => <Text>{item}</Text>)}
         </WrapperComponent>
         {open ? children : null}
      </>
   );
};

export default TableRowCollapse;
