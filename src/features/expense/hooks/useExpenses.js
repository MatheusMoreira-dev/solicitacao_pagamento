import { useContext } from "react";
import { ExpensesContext } from "@/features/expense/context/ExpensesContext";

export function useExpenses() {
  const context = useContext(ExpensesContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useExpenses se o componente estiver dentro do contexto ",
    );

  return context;
}
