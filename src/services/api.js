import app from "./firebase";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  update,
  remove,
} from "firebase/database";

const db = getDatabase(app);
const paymentsRef = ref(db, "pagamentos/");

function createPayment(payment) {
  const node = push(paymentsRef);
  const pathRef = ref(db, `pagamentos/${node.key}`);

  return set(pathRef, payment);
}

function listenPayments(callback, cancelCallBack) {
  const unsubscribe = onValue(
    paymentsRef,
    (snapshot) => {
      const data = snapshot.val();
      callback(
        data
          ? Object.entries(data).map(([key, values]) => ({
              id: key,
              ...values,
            }))
          : [],
      );
    },
    cancelCallBack,
  );

  return unsubscribe;
}

function updatePayment(payment) {
  if (!payment?.id) throw new Error("Não foi informado o id");

  const pathRef = ref(db, `pagamentos/${payment.id}`);
  return update(pathRef, payment);
}

function deletePayment(id) {
  if (!id) throw new Error("Não foi informado o id");

  const pathRef = ref(db, `pagamentos/${id}`);
  return remove(pathRef);
}

function batchFormData() {
  const unidades = [
    { nome: "SEDE", cnpj: "1" },
    { nome: "HUC", cnpj: "2" },
    { nome: "NAS", cnpj: "3" },
    { nome: "LAGOA", cnpj: "4" },
  ];

  const solicitantes = [
    { nome: "Matheus Moreira Marcelino", ramal: 2018, setor: "Marketing" },
  ];

  const setores = [{ nome: "Marketing", unidade: "SEDE", ramal: 2018 }];

  const prestadores = [
    {
      nomeFantasia: "BSG",
      razaoSocial: "Sublime",
      cnpj: "111",
      metodosPagamento: {},
    },
  ];

  const metodosPagamento = [
    { nome: "Boleto", valor: "boleto" },
    { nome: "Cheque", valor: "cheque" },
    { nome: "Cartão Corporativo", valor: "cartao" },
    { banco: "Banco do Brasil", agencia: "10223-10" },
  ];

  return { unidades, solicitantes, setores, prestadores, metodosPagamento };
}

export {
  batchFormData,
  createPayment,
  listenPayments,
  updatePayment,
  deletePayment,
};
