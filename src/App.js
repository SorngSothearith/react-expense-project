import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSE = [
    {
      id: "el1",
      title: "Car Insurance1",
      amount: 209.5,
      date: new Date(2021, 2, 21),
      display: true,
    },
    {
      id: "el2",
      title: "Car Insurance2",
      amount: 209.03,
      date: new Date(2021, 5, 21),
      display: true,
    },
    {
      id: "el3",
      title: "Car Insurance3",
      amount: 209.02,
      date: new Date(2020, 4, 21),
      display: true,
    },
    {
      id: "el4",
      title: "Car Insurance3",
      amount: 209.02,
      date: new Date(2022, 4, 21),
      display: true,
    },
  ];
  const [formHide, setFormHide] = useState(true);
  const [expense, setExpense] = useState(DUMMY_EXPENSE);
  const [currentFilterYear, setCurrentFilterYear] = useState("all");

  const addExpenseHandle = async (expenseData) => {
    setExpense((prev) => {
      return [...prev, expenseData];
    });
  };

  const changeDateFilterHandle = async (date) => {
    let data = [];
    if (date === "all") {
      data = await expense.map((item) => {
        item.display = true;
        return item;
      });
    } else {
      data = await expense.map((item) => {
        let itemDate = item.date.getFullYear().toString();
        if (date === itemDate) item.display = true;
        else item.display = false;
        return item;
      });
    }
    setCurrentFilterYear(date);
    setExpense(data);
  };
  return (
    <>
      <h1>Let's get start</h1>
      <NewExpense
        currentFilterYear={currentFilterYear}
        onAddExpense={addExpenseHandle}
        formHide={formHide}
        setFormHide={setFormHide}
      ></NewExpense>
      <Expenses
        expenses={expense}
        currentFilterYear={currentFilterYear}
        setFormHide={setFormHide}
        changeDateFilterHandle={changeDateFilterHandle}
      ></Expenses>
    </>
  );
}

export default App;
