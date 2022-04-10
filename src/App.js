import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TableBody from "./components/TableBody";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";


const App = () => {

  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <TableBody />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;