import { createContext, useContext } from "react";
import { getExpenses } from "@/features/expense/services/expenseService";
import { useState, useEffect } from "react";

const ExpensesContext = createContext({});

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [pageCursors, setPageCursors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadExpenses() {
      try {
        setLoading(true);

        const lastDoc = pageCursors[page - 1] ?? null;

        const result = await getExpenses({
          lastDoc,
        });

        setExpenses(result.expenses);
        setHasMore(result.hasMore);

        if (result.lastDoc) {
          setPageCursors((prev) => ({
            ...prev,
            [page]: result.lastDoc,
          }));
        }
      } catch (error) {
        console.error("Erro ao carregar despesas:", error);
      } finally {
        setLoading(false);
      }
    }

    loadExpenses();
  }, [page]);

  function nextPage() {
    if (!hasMore || loading) return;

    setPage((prev) => prev + 1);
  }

  function previousPage() {
    if (page === 1 || loading) return;

    setPage((prev) => prev - 1);
  }

  async function handleAddExpense(expense) {}

  async function handleUpdateExpense(id, data) {}

  async function handleDeleteExpense(id) {}

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        page,
        hasMore,
        loading,
        nextPage,
        previousPage,
        addExpense: handleAddExpense,
        deleteExpense: handleDeleteExpense,
        updateExpense: handleUpdateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpensesContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useExpenses se o componente estiver dentro do contexto ",
    );

  return context;
}
