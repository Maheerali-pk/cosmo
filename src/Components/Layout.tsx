import { MuiThemeProvider, createTheme } from "@material-ui/core";
import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, fonts, toRem } from "../Helpers/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AppWrapper = styled.div`
   display: flex;
   /* display: grid; */
   /* grid-template-rows: min-content auto; */
   flex-direction: column;
   height: 100vh;
   width: 100%;
   overflow: hidden;
`;

const BottomArea = styled.div<{ isSidebarOpen: boolean }>`
   display: grid;
   grid-template-columns: ${(p) => `${p.isSidebarOpen ? toRem(240) : "min-content"} auto`};
   height: 80vh;
   /* height: auto; */
   flex-grow: 1;
   width: 100%;
   /* overflow: none; */
   /* height: 100%; */
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
         <BottomArea isSidebarOpen={isSidebarOpen}>
            <Sidebar></Sidebar>
            {children}
         </BottomArea>
      </AppWrapper>
   );
};

export default Layout;
