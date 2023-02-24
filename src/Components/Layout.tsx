import { MuiThemeProvider, createTheme } from "@material-ui/core";
import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, fonts, toRem } from "../Helpers/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AppWrapper = styled.div`
   display: grid;
   grid-template-rows: ${toRem(40)} auto;
   height: 100vh;
   width: 100%;
   overflow: hidden;
   background: white;
`;

const BottomArea = styled.div<{ isSidebarOpen?: boolean }>`
   display: grid;
   grid-template-columns: ${(p) =>
      `${p.isSidebarOpen ? 85 + 217 + "px" : "85px"} auto`};
   width: 100%;
`;

const PageWrapper = styled.div`
   overflow: auto;
`;

interface LayoutProps {
   navbarItems: string[];
}

const Layout: React.FC<LayoutProps> = ({ children, navbarItems }) => {
   const [{ isSidebarOpen, isSmallSidebarOpen }] = useGlobalContext();
   return (
      <BottomArea className="bottom-area" isSidebarOpen={isSmallSidebarOpen}>
         <Sidebar></Sidebar>
         <AppWrapper>
            <Navbar headingItems={navbarItems}></Navbar>
            {children}
         </AppWrapper>
      </BottomArea>
   );
};

export default Layout;
