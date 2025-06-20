// src/App.jsx
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updated = [...expenses];
    updated.splice(index, 1);
    setExpenses(updated);
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>💰 Expense Tracker</h1>
      <div className="form-section">
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div className="list-section">
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        <div className="total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;