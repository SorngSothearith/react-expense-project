import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expense found</h2>;
  return (
    <ul className="expense-list">
      {props.items.map((item) => {
        return item.display && <ExpenseItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
