import { createContext } from "react";
import {
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
      status: "Em aberto",
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

  async function addExpense(expense) {
    try {
      await createExpense(expense);
      return true;
    } catch (error) {
      console.error("Erro ao criar despesa:", error);
      return false;
    }
  }

  async function editExpense(id, data) {}

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        loading,
        error,
        addExpense: addExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
