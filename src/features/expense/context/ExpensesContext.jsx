import { createContext } from "react";
import {
  getExpenses,
  createExpense,
  listenExpenses,
} from "@/features/expense/services/expenseService";
import { useState, useEffect } from "react";

export const ExpensesContext = createContext({});

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const unsubscribeExpenses = listenExpenses({
      status: "em_aberto",
      onChange: (data) => {
        setExpenses(data);
        setLoading(false);
      },
      onError: (err) => {
        setError(err);
        setLoading(false);
      },
    });

    return () => unsubscribeExpenses();
  }, []);

  async function handleAddExpense(expense) {
    try {
      await createExpense(expense);
    } catch (error) {
      console.error("Erro ao criar despesa:", error);
    }
  }

  async function handleUpdateExpense(id, data) {}

  async function handleDeleteExpense(id) {}

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        loading,
        error,
        addExpense: handleAddExpense,
        deleteExpense: handleDeleteExpense,
        updateExpense: handleUpdateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
