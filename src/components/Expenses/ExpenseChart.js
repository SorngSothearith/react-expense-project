import React, { Component } from "react";
import Chart from "../Chart/Chart";

export default class ExpenseChart extends Component {
  render() {
    const chartDataPoint = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];
    this.props.expenses.forEach((expense) => {
      const expenseMonth = expense.date.getMonth();
      let amount = 0;
      if (expense.display) amount = expense.amount;
      chartDataPoint[expenseMonth].value += amount;
    });
    return <Chart dataPoints={chartDataPoint} />;
  }
}
