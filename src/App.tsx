import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";
import { GlobalContextProvider } from "./Contexts/GlobalContext/GlobalContext";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { flexbox } from "./StyledComponents/Flexbox";

const AppWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
`;

const BottomArea = styled.div`
   ${flexbox({})};
   flex-grow: 1;
   background-color: orange;
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
            </BottomArea>
         </AppWrapper>
      </GlobalContextProvider>
   );
}

export default App;
