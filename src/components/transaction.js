import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import Trans from "./trans";

const Transaction = () => {
  const { trans } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {trans.map((i) => (
          <Trans key={i.id} trans={i} />
        ))}
      </ul>
    </>
  );
};

export default Transaction;
