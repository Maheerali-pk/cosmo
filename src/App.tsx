import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";
import { GlobalContextProvider } from "./Contexts/GlobalContext/GlobalContext";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { flexbox } from "./StyledComponents/Flexbox";
import AccountRecieveables from "./Pages/AccountRecieveables/AccountRecieveables";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { colors, fonts } from "./Helpers/utils";

const AppWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
`;

const BottomArea = styled.div`
   ${flexbox({})};
   flex-grow: 1;
   width: 100%;
   /* height: 100%; */
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
   return (
      <GlobalContextProvider>
         <MuiThemeProvider theme={theme}>
            <AppWrapper>
               <Navbar headingItems={["Airmed", "Accounting", "Accounts"]}></Navbar>
               <BottomArea>
                  <Sidebar></Sidebar>
                  <AccountRecieveables></AccountRecieveables>
               </BottomArea>
            </AppWrapper>
         </MuiThemeProvider>
      </GlobalContextProvider>
   );
}

export default App;
