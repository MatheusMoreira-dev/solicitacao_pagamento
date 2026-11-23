import {
  serverTimestamp,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { db } from "@/services/firebase/config";

const expensesRef = collection(db, "despesas");

export async function createExpense(expense) {
  const docRef = await addDoc(expensesRef, {
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
    ...expense,
    status: "Em aberto",
  });

  return {
    id: docRef.id,
    ...expense,
  };
}

// Escuta todos os itens de um determinado status
export function listenExpenses({ status, onChange, onError }) {
  const constraints = [orderBy("lastUpdate", "desc")];

  const q = query(expensesRef, ...constraints);

  return onSnapshot(
    q,
    (snapshot) => {
      const expenses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(expenses);

      onChange(expenses);
    },
    onError,
  );
}
