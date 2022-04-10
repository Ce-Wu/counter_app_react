import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>To pay</h2>
      <h3>${totalIncome}</h3>
      <div className="income-expense">
      </div>
    </div>
  );
};

export default Balance;