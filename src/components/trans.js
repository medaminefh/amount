import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const Trans = ({ trans }) => {
  const { deleted } = useContext(GlobalContext);
  const sign = trans.amount < 0 ? "-" : "+";
  return (
    <li className={trans.amount > 0 ? "plus" : "minus"}>
      {trans.text}
      <span>
        {sign} ${trans.amount}
      </span>
      <button onClick={() => deleted(trans.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Trans;
