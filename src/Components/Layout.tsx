import { MuiThemeProvider, createTheme } from "@material-ui/core";
import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, fonts, toRem } from "../Helpers/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AppWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 100%;
   overflow: hidden;
`;

const BottomArea = styled.div<{ isSidebarOpen: boolean }>`
   display: grid;
   grid-template-columns: ${(p) => `${p.isSidebarOpen ? toRem(240) : "min-content"} auto`};
   height: 93.5vh;
   /* flex-grow: 1; */
   width: 100%;
   /* height: 100%; */
`;

const PageWrapper = styled.div`
   overflow: auto;
`;

const theme = createTheme({
   overrides: {
      MuiInputLabel: {
         root: {
            color: colors.graySelection2,
         },
      },
      MuiSelect: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
         select: {
            paddingRight: 0,
         },
      },
      MuiInputBase: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
      },
      MuiButton: {
         root: {
            borderRadius: "2px",
            backgroundColor: colors.graySelection2,
            color: colors.grayText,
            padding: `${toRem(4)} ${toRem(16)}`,
         },
      },
   },
});
interface LayoutProps {
   navbarItems: string[];
}

const Layout: React.FC<LayoutProps> = ({ children, navbarItems }) => {
   const [{ isSidebarOpen }] = useGlobalContext();
   return (
      <MuiThemeProvider theme={theme}>
         <AppWrapper>
            <Navbar headingItems={navbarItems}></Navbar>
            <BottomArea isSidebarOpen={isSidebarOpen}>
               <Sidebar></Sidebar>
               {children}
            </BottomArea>
         </AppWrapper>
      </MuiThemeProvider>
   );
};

export default Layout;
