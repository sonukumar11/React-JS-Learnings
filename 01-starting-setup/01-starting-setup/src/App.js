import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import Test from './Test';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id : Math.random(),
    amount : "12.99",
    date : new Date(),
    title : "A Tool"
  }
];

const App = () => {
  const [expenses, SetExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // SetExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
    SetExpenses([expense , ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
      <Test></Test>
    </div>
    
  );
};

export default App;
