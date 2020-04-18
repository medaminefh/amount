import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
const Balance = () => {
  const { trans } = useContext(GlobalContext);
  const amounts = trans.map((i) => i.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;
