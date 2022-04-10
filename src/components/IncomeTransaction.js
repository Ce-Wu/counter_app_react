import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <td className="transaction"
    >      
          <td>{incomeTransaction.incomeText}</td>
          <td>{incomeTransaction.incomeTextDetails}</td>
          <td>{incomeTransaction.selectedOption}</td>
          <td>$ {incomeTransaction.incomeAmount}</td>
          <button
            onClick={() => deleteTransaction(incomeTransaction.id)}
            className="delete-btn"
          >
          <i className="fas fa-trash"></i>
          </button>
    </td>

  );
};

export default IncomeTransaction;