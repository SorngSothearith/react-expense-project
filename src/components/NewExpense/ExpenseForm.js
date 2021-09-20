import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ setFormHide, onSaveExpenseData }) => {
  const [getUserInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });
  const changeTitleHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enterTitle: event.target.value };
    });
  };
  const changeAmountHandler = (event) => {
    setUserInput({
      ...getUserInput,
      enterAmount: event.target.value,
    });
  };
  const changeDateHandler = (event) => {
    setUserInput({
      ...getUserInput,
      enterDate: event.target.value,
    });
  };
  const submitHandle = (event) => {
    event.preventDefault();
    const expenseData = {
      title: getUserInput.enterTitle,
      amount: parseFloat(getUserInput.enterAmount),
      date: new Date(getUserInput.enterDate),
    };
    onSaveExpenseData(expenseData);
    setUserInput((previousState) => {
      return { ...previousState, enterTitle: "" };
    });
    setUserInput((previousState) => {
      return { ...previousState, enterAmount: "" };
    });
    setUserInput((previousState) => {
      return { ...previousState, enterDate: "" };
    });
  };
  return (
    <div>
      <form className="new-expense__controls" onSubmit={submitHandle}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={getUserInput.enterTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={getUserInput.enterAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-05-01"
            step="2021-12-05"
            value={getUserInput.enterDate}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <div className="new-expense__controls">
            <button onClick={() => setFormHide(true)}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
