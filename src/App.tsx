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
import Construction from "./Pages/Construction/Construction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Register from "./Pages/Register/Register";
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
         containedPrimary: {
            backgroundColor: colors.blueButton,
            color: "white",
            fontSize: "1.5rem",
         },
         textPrimary: {
            color: "white",
         },
      },
      MuiTextField: {
         root: {
            borderBottom: `${toRem(3)} solid #A4A4A4`,
            marginBottom: toRem(40),
         },
      },
   },
});
function App() {
   return (
      <Router>
         <Switch>
            <MuiThemeProvider theme={theme}>
               <Route path="/projects">
                  <Layout navbarItems={["Airmed", "Accounting", "Company"]}>
                     <Construction></Construction>
                  </Layout>
               </Route>
               <Route path="/accounting">
                  <Layout navbarItems={["Airmed", "Accounting", "Sales"]}>
                     <AccountRecieveables></AccountRecieveables>
                  </Layout>
               </Route>
               <Route path="/register">
                  <Register></Register>
               </Route>
            </MuiThemeProvider>
         </Switch>
      </Router>
   );
}

export default App;
