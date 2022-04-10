import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {
  const { addIncome } = useContext(GlobalContext);
  
  const options = [
    {
      name:"Choose an option...",
      value: ""
    },
    {
      name:"Hardware",
      value: "hardware"
    },
    {
      name:"Other devices",
      value: "other devices"
    },
    {
      name:"Software",
      value: "software"
    },
    {
      name:"Other",
      value: "other"
    },
  ]
  const [income, setIncome] = useState({
    incomeText: "",
    incomeTextDetails: "",
    incomeAmount: 0,
  });

  const [selectedOption, setSelectedOption] = useState(options[0].value);


  const { incomeText, incomeTextDetails, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "" && incomeTextDetails !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeTextDetails,
        selectedOption,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeTextDetails: "",
        incomeAmount: 0,
      });

      setSelectedOption({selectedOption: ''})
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add product name..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="text"
            name="incomeTextDetails"
            value={incomeTextDetails}
            placeholder="Add product details..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <select
            name="category"
            autoComplete="off"
            onChange={e => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.name}</option>
          ))}
        
          </select>
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;