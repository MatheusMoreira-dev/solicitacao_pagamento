import {
  serverTimestamp,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

import { db } from "@/services/firebase/config";

const expensesRef = collection(db, "dividas");

export async function createExpense(expense) {
  const docRef = await addDoc(expensesRef, {
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
    ...expense,
  });

  return {
    id: docRef.id,
    ...expense,
  };
}

const PAGE_SIZE = 20;

// Retorna um intervalo (último doc até o PAGE_SIZE) de dívidas de acordo com o status e o último objeto
export async function getExpenses({ status, lastDoc }) {
  const constraints = [
    where("status", "==", status),
    orderBy("lastUpdate", "desc"),
    limit(PAGE_SIZE),
  ];

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

export function listenExpenses({ status, onChange, onError }) {
  const constraints = [
    where("status", "==", status),
    orderBy("lastUpdate", "desc"),
  ];

  const q = query(expensesRef, ...constraints);

  return onSnapshot(
    q,
    (snapshot) => {
      const expenses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      onChange(expenses);
    },
    onError,
  );
}
