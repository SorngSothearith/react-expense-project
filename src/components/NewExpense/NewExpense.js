import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({
  formHide,
  setFormHide,
  onAddExpense,
  currentFilterYear,
}) => {
  const saveExpenseDataHandle = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random(),
      display:
        enterExpenseData.date.getFullYear().toString() === currentFilterYear,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {formHide ? (
        <div
          className="new-expense__controls"
          style={{ justifyContent: "center" }}
        >
          <button type="submit" onClick={() => setFormHide(!formHide)}>
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          setFormHide={setFormHide}
          onSaveExpenseData={saveExpenseDataHandle}
        />
      )}
    </div>
  );
};
export default NewExpense;
