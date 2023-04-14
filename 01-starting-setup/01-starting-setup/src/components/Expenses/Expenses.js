import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from "./ExpenseChart";

import { useState } from "react";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");
  const onChangeYearHandler = (year) => {
    setEnteredYear(year);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });


  

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          filteredYear={enteredYear}
          ChangeYearHandler={onChangeYearHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses = {filteredItems}></ExpenseChart>
        <ExpensesList items = {filteredItems}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
