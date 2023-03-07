import styled from "styled-components";
import { colors } from "../Helpers/utils";
import Table from "../Pages/AccountRecieveables/Table";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import { Drawer } from "@material-ui/core";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { Close } from "@material-ui/icons";

interface CustomDrawerProps {
   width?: string;
   Component: React.FC;
}

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
const CustomDrawer: React.FC<CustomDrawerProps> = ({
   width = "50%",
   Component,
}) => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Drawer
         anchor="right"
         open={state.drawer === Component}
         style={{ width }}
         PaperProps={{
            style: {
               width: width,
               boxShadow: "none",
               background: "transparent",
            },
         }}
         onClose={() => dispatch({ setState: { drawer: undefined } })}
         keepMounted
      >
         <WrapperWrapper>
            <DrawerCloseWrapper align="start">
               <DrawerClose
                  justify="center"
                  onClick={() => dispatch({ setState: { drawer: undefined } })}
               >
                  <Close></Close>
               </DrawerClose>
            </DrawerCloseWrapper>
            <Component></Component>
         </WrapperWrapper>
      </Drawer>
   );
};

export default CustomDrawer;
