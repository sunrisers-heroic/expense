// src/components/ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <ul className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.name}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={() => onDeleteExpense(index)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;