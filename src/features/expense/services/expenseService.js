import { collection, addDoc } from "firebase/firestore";
import { db } from "@/services/firebase/config";

const expensesRef = collection(db, "dividas");

export async function createExpense(expense) {
  const docRef = await addDoc(expensesRef, {
    dataCriacao: Date.now(),
    ...expense,
  });

  return {
    id: docRef.id,
    ...expense,
  };
}
