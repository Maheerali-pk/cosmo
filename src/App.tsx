import React, { useEffect, useState } from "react";
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
import PermissionsUser from "./Pages/Settings/PermissionsUser/PermissionsUser";
import Approvals from "./Pages/Settings/Approvals/Approvals";
import Directory from "./Pages/Settings/Directory/Directory";
import Journal from "./Pages/Accounts/Journal/Journal";
import JournalEntry from "./Pages/Accounts/JournalEntry/JournalEntry";
import ChartOfAccounts from "./Pages/Accounts/ChartOfAccounts/ChartOfAccounts";
import GeneralLedgerExtra from "./Pages/Accounts/GeneralLedgerExtra/GeneralLegerExtra";
import SalesCenter from "./Pages/Accounts/SalesCenter/SalesCenter";
import Payment from "./Pages/Accounts/Payment/Payment";
import Invoice from "./Pages/Accounts/Invoice/Invoice";
import Bank from "./Pages/Accounts/Bank/Bank";
import Checks from "./Pages/Accounts/Checks/Checks";
import EmployeeProfile from "./Pages/HR/EmployeeProfile/EmployeeProfile";
import HRCalendar from "./Pages/HR/Calendar/HRCalendar";
import InventoryItem from "./Pages/SupplyChain/InventoryItem/InventoryItem";
import NewAdjustments from "./Pages/SupplyChain/NewAdjustment";
import Report1 from "./Pages/Reports/Report1/Report1";

//@ts-ignore
import * as file1 from "./SegoeUI-normal";

//@ts-ignore
import * as file2 from "./SegoeUIBold-normal";
//@ts-ignore
import * as file3 from "./SegoeUISemibold-normal";

const theme = createTheme(commonStyles);
function App() {
   const [state, dispatch] = useGlobalContext();
   const [isDialogShown, setIsDialogShown] = useState(Boolean(document.querySelector(".dialog")));
   useEffect(() => {
      if (state.dialog && Boolean(document.querySelector(".dialog"))) {
         setIsDialogShown(true);
      } else {
         setIsDialogShown(false);
      }
   }, [state.dialog]);
   useEffect(() => {
      if (state.isPrinting) {
         document.body.classList.add("printing");
      } else {
         document.body.classList.remove("printing");
      }
   }, [state.isPrinting]);
   useEffect(() => {
      //@ts-ignore
      window.x = file1;
      //@ts-ignore
      window.x = file2;
      //@ts-ignore
      window.x = file3;
   }, []);
   return (
      <Router>
         <Switch>
            <MuiThemeProvider theme={theme}>
               {isDialogShown ? (
                  <div style={{ height: "100%", width: "100%", position: "absolute", opacity: 0 }}></div>
               ) : null}
               <Route exact path="/projects">
                  <Layout navbarItems={["Airmed", "Accounting", "Company"]}>
                     <Construction></Construction>
                  </Layout>
               </Route>
               <Route exact path="/accounting">
                  <Layout navbarItems={["Airmed", "Accounting", "Sales"]}>
                     <AccountRecieveables></AccountRecieveables>
                  </Layout>
               </Route>
               <Route exact path="/register">
                  <Register></Register>
               </Route>
               <Route exact path="/register2">
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
               <Route exact path="/settings/permissions/user">
                  <PermissionsUser name="Nate Anderson"></PermissionsUser>
               </Route>
               <Route exact path="/settings/approvals">
                  <Approvals></Approvals>
               </Route>
               <Route exact path="/settings/directory">
                  <Directory></Directory>
               </Route>
               <Route exact path="/accounting/journal">
                  <Journal></Journal>
               </Route>
               <Route exact path="/accounting/journal/entry">
                  <JournalEntry></JournalEntry>
               </Route>
               <Route exact path="/accounting/chart-of-accounts">
                  <ChartOfAccounts></ChartOfAccounts>
               </Route>
               <Route exact path="/accounting/general-ledger-extra">
                  <GeneralLedgerExtra></GeneralLedgerExtra>
               </Route>

               <Route exact path="/accounting/sales-center">
                  <SalesCenter></SalesCenter>
               </Route>
               <Route exact path="/accounting/payment">
                  <Payment></Payment>
               </Route>
               <Route exact path="/accounting/invoice">
                  <Invoice></Invoice>
               </Route>
               <Route exact path="/accounting/bank">
                  <Bank></Bank>
               </Route>
               <Route exact path="/accounting/checks">
                  <Checks></Checks>
               </Route>
               <Route exact path="/hr/employee-profile">
                  <EmployeeProfile></EmployeeProfile>
               </Route>
               <Route exact path="/hr/calendar">
                  <HRCalendar />
               </Route>
               <Route exact path="/sc/inventory-item">
                  <InventoryItem />
               </Route>
               <Route exact path="/sc/new-adjustments">
                  <NewAdjustments />
               </Route>
               <Route exact path="/">
                  <Main></Main>
               </Route>
               <Route exact path="/report1">
                  <Report1
                     PFINo="PFI-18-0373"
                     invoiceNo="INV-18-0373"
                     date="Aug 02, 2018"
                     currency="EUR"
                     country="USA"
                     shippingTerms="CFR by SEA"
                     paymentTerms="Bank Contract"
                     landingPort="USA"
                     destinationPort="Karachi"
                     preparedBy="Fawad Ahmed"
                     bankDetails={{
                        accountTitle: "AdChem FZE",
                        IBAN: "AE140240097521214845701",
                        address: "Emaar Business Park, Sh.Zayed Road, Dubai, United Arab",
                        name: "DUBAI ISLAMIC BANK (EURO)",
                        swiftCode: "DUIBAEAD",
                        currency: "EUR",
                     }}
                     footerRows={[
                        "23978009 15.03.2018 15.03.2021",
                        "23978009 15.03.2018 15.03.2021",
                        "23978009 15.03.2018 15.03.2021",
                        "23978009 15.03.2018 15.03.2021",
                     ]}
                     tableData={{
                        totalString: "Thirty Two Thousand Nine Hundred Forty only",
                        currency: "EUR",
                        total: 32940.0,
                        rows: [
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 1,
                           },

                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },

                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                           {
                              name: "Ferrous Gluconate EP Powder",
                              description: (
                                 <>
                                    In very fine Powder form
                                    <br />
                                    HS Code: 2918.16.0000
                                 </>
                              ),
                              qty: 5400,
                              uom: "KG",
                              unitPrice: 6.1,
                              totalAmount: 32940,
                              sn: 2,
                           },
                        ],
                     }}
                  ></Report1>
               </Route>
            </MuiThemeProvider>
         </Switch>
      </Router>
   );
}

export default App;
