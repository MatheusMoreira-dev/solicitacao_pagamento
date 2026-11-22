import {
  serverTimestamp,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/services/firebase/config";

const serviceProvidersRef = collection(db, "prestadores");

export async function createServiceProvider(serviceProvider) {
  const docRef = await addDoc(serviceProvidersRef, {
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
    ...serviceProvider,
  });

  return {
    id: docRef.id,
    ...serviceProvider,
  };
}

// Retorna um intervalo de dívidas de acordo com o status e o último objeto
export async function getServiceProviders() {
  const constraints = [orderBy("razaoSocial", "asc")];
  const q = query(serviceProvidersRef, ...constraints);

  const snapshot = await getDocs(q);

  const serviceProviders = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return serviceProviders;
}

export function listenServiceProviders({ onChange, onError }) {
  const q = query(serviceProvidersRef, orderBy("nomeFantasia", "asc"));

  return onSnapshot(
    q,
    (snapshot) => {
      const serviceProviders = snapshot.docs.map((v) => ({
        id: v.id,
        ...v.data(),
      }));

      onChange(serviceProviders);
    },
    onError,
  );
}

export async function deleteServiceProvider(id) {
  const docRef = doc(db, "prestadores", id);
  await deleteDoc(docRef);
}
