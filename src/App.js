import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/balance";
import Income from "./components/Income";
import Transaction from "./components/transaction";
import Add from "./components/Add";
import { GlobalProvider } from "./context/globalContext";

const App = (props) => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <Add />
      </div>
    </GlobalProvider>
  );
};

export default App;
