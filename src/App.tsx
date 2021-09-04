import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";
import { GlobalContextProvider } from "./Contexts/GlobalContext/GlobalContext";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { flexbox } from "./StyledComponents/Flexbox";
import AccountRecieveables from "./Pages/AccountRecieveables/AccountRecieveables";

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

function App() {
   return (
      <GlobalContextProvider>
         <AppWrapper>
            <Navbar headingItems={["Airmed", "Accounting", "Accounts"]}></Navbar>
            <BottomArea>
               <Sidebar></Sidebar>
               <AccountRecieveables></AccountRecieveables>
            </BottomArea>
         </AppWrapper>
      </GlobalContextProvider>
   );
}

export default App;
