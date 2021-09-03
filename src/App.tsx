import React from "react";
import "./App.css";
import "./Fonts.css";
import Navbar from "./Components/Navbar";

function App() {
   return (
      <div className="App">
         <Navbar headingItems={["Airmed", "Accounting", "Accounts"]}></Navbar>
      </div>
   );
}

export default App;
