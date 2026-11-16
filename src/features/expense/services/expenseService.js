import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
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

const PAGE_SIZE = 20;

// Retorna um intervalo de dívidas de acordo com o status e o último objeto
export async function getExpenses({ status, lastDoc }) {
  const constraints = [orderBy("lastUpdate", "desc"), limit(PAGE_SIZE)];

  if (status) constraints.unshift(where("status", "==", status));

  if (lastDoc) constraints.push(startAfter(lastDoc));

  const q = query(expensesRef, ...constraints);

  const snapshot = await getDocs(q);

  const expenses = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const lastDocUpdate = snapshot.docs.at(-1) ?? null;

  return {
    expenses,
    lastDocUpdate,
    hasMore: snapshot.docs.length === PAGE_SIZE,
  };
}
