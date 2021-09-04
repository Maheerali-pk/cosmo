import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";
import { GlobalContextProvider, useGlobalContext } from "./Contexts/GlobalContext/GlobalContext";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { flexbox } from "./StyledComponents/Flexbox";
import AccountRecieveables from "./Pages/AccountRecieveables/AccountRecieveables";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { colors, fonts, toRem } from "./Helpers/utils";

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
   },
});

function App() {
   const [{ isSidebarOpen }] = useGlobalContext();
   return (
      <MuiThemeProvider theme={theme}>
         <AppWrapper>
            <Navbar headingItems={["Airmed", "Accounting", "Accounts"]}></Navbar>
            <BottomArea isSidebarOpen={isSidebarOpen}>
               <Sidebar></Sidebar>
               <AccountRecieveables></AccountRecieveables>
            </BottomArea>
         </AppWrapper>
      </MuiThemeProvider>
   );
}

export default App;
