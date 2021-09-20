import { useState } from "react";
import Card from "../Card/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = ({ expenses, changeDateFilterHandle, currentFilterYear }) => {
  const changeDate = (date) => {
    changeDateFilterHandle(date);
  };
  return (
    <div className="">
      <Card className="expenses">
        <ExpensesFilter
          currentFilterYear={currentFilterYear}
          changeDateFilter={changeDate}
        />
        <ExpenseChart expenses={expenses} />
        <ExpenseList items={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
