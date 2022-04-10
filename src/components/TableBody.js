import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <tbody className="transactions transactions-income">
      <tr className="transaction">
        <th>Category</th>
        <th>Details</th>
        <th>Select</th>
        <th>Price</th>
      </tr>
      <tr className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </tr>
    </tbody>
  );
};

export default IncomeList;