import { MuiThemeProvider, createTheme } from "@material-ui/core";
import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, fonts, toRem } from "../Helpers/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AppWrapper = styled.div`
   display: grid;
   grid-template-rows: ${toRem(52)} auto;
   height: 100vh;
   width: 100%;
   overflow: hidden;
`;

const BottomArea = styled.div<{ isSidebarOpen: boolean }>`
   display: grid;
   grid-template-columns: ${(p) => `${p.isSidebarOpen ? toRem(240) : "min-content"} auto`};
   width: 100%;
`;

const PageWrapper = styled.div`
   overflow: auto;
`;

interface LayoutProps {
   navbarItems: string[];
}

const Layout: React.FC<LayoutProps> = ({ children, navbarItems }) => {
   const [{ isSidebarOpen }] = useGlobalContext();
   return (
      <AppWrapper>
         <Navbar headingItems={navbarItems}></Navbar>
         <BottomArea className="bottom-area" isSidebarOpen={isSidebarOpen}>
            <Sidebar></Sidebar>
            {children}
         </BottomArea>
      </AppWrapper>
   );
};

export default Layout;
