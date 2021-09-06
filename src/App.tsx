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

function App() {
   return (
      <Router>
         <Switch>
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
         </Switch>
      </Router>
   );
}

export default App;
