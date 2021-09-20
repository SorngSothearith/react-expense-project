import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "../ExpenseItem/ExpenseItem.css";
export default (function ExpenseItem({ item }) {
  const [getTitle] = useState(item.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{getTitle}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </Card>
  );
});
