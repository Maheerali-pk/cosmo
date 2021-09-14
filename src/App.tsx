import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";
import { GlobalContextProvider, useGlobalContext } from "./Contexts/GlobalContext/GlobalContext";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { flexbox } from "./StyledComponents/Flexbox";
import AccountRecieveables from "./Pages/AccountRecieveables/AccountRecieveables";
import { createTheme, MuiThemeProvider, ThemeOptions } from "@material-ui/core";
import { colors, commonStyles, fonts, toRem } from "./Helpers/utils";
import Construction from "./Pages/Construction/Construction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Register from "./Pages/Register/Register";
import Register2 from "./Pages/Register2/Register2";
import Login from "./Pages/Login/Login";
import ForgotPassword1 from "./Pages/FotgotPassword1/ForgotPassword1";
import ForgotPassword2 from "./Pages/ForgotPassword2/ForgotPassword2";
import ForgotPassword3 from "./Pages/ForgotPassword3/ForgotPassword3";
import Main from "./Pages/Main/Main";

import "./Fonts/MyriadProSemibold.ttf";
import "./Fonts/SegoeUISemibold.ttf";
import "./Fonts/SegoeUI.ttf";
import Overview from "./Pages/Settings/Overview/Overview";
import Teams from "./Pages/Settings/Teams/Teams";
import Dialog from "./Components/Dialog";
import Permissions from "./Pages/Settings/Permissions/Permissions";

const theme = createTheme(commonStyles);
function App() {
   const [{ dialog: CurrentDialog }] = useGlobalContext();
   return (
      <Router>
         <Switch>
            <MuiThemeProvider theme={theme}>
               {CurrentDialog && <CurrentDialog></CurrentDialog>}
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
               <Route path="/register2">
                  <Register2></Register2>
               </Route>
               <Route path="/login">
                  <Login></Login>
               </Route>
               <Route path="/forgot-password1">
                  <ForgotPassword1></ForgotPassword1>
               </Route>
               <Route path="/forgot-password2">
                  <ForgotPassword2></ForgotPassword2>
               </Route>
               <Route path="/forgot-password3">
                  <ForgotPassword3></ForgotPassword3>
               </Route>
               <Route exact path="/settings/overview">
                  <Overview></Overview>
               </Route>
               <Route exact path="/settings/teams">
                  <Teams></Teams>
               </Route>
               <Route exact path="/settings/permissions">
                  <Permissions></Permissions>
               </Route>
               <Route exact path="/">
                  <Main></Main>
               </Route>
            </MuiThemeProvider>
         </Switch>
      </Router>
   );
}

export default App;
