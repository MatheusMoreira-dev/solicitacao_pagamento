import PaymentsList from "../components/PaymentsList";
import PaymentForm from "@/components/PaymentForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusIcon } from "lucide-react";
import PaymentSheet from "@/components/PaymentSheet";
import { useState } from "react";

const payments = [
  {
    prestador: "Matheus",
    valor: 12.0,
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime
      eligendi eum sequi totam aspernatur voluptatibus a quas cupiditate.
      Reiciendis omnis tempora maiores atque illo corporis culpa nihil iusto
      debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime
      eligendi eum sequi totam aspernatur voluptatibus a quas cupiditate.
      Reiciendis omnis tempora maiores atque illo corporis culpa nihil iusto
      debitis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime
      eligendi eum sequi totam aspernatur voluptatibus a quas cupiditate.
      Reiciendis omnis tempora maiores atque illo corporis culpa nihil iusto
      debitis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime
      eligendi eum sequi totam aspernatur voluptatibus a quas cupiditate.
      Reiciendis omnis tempora maiores atque illo corporis culpa nihil iusto
      debitis!`,
    dataPagamento: "2026-10-12",
    metodoPagamento: { tipo: "Boleto" },
    dataSolicitacao: "2026-10-01",
    unidade: "SEDE",
    setor: "Marketing",
    solicitante: "Matheus Moreira Marcelino",
  },
];

const teste = new Array(10).fill(payments[0]);

const unidades = [
  { nome: "SEDE", cnpj: "1" },
  { nome: "HUC", cnpj: "2" },
  { nome: "NAS", cnpj: "3" },
  { nome: "LAGOA", cnpj: "4" },
];

const soliciantes = [
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

const pagamentos = [
  { nome: "Boleto", valor: "boleto" },
  { nome: "Cheque", valor: "cheque" },
  { nome: "Cartão Corporativo", valor: "cartao" },
  { banco: "Banco do Brasil", agencia: "10223-10" },
];

function Payments() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  function handleSheetOpen(payment) {
    setSelectedPayment(payment);
    setSheetOpen(true);
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex min-h-0 flex-1 flex-col">
      <div className="px-8 pb-2 flex w-full items-center gap-3 justify-between">
        <Input
          id="search-input"
          type="text"
          placeholder="Pesquisa..."
          className={"py-5 max-w-3xl shadow-md"}
        ></Input>

        <Dialog>
          <DialogTrigger>
            <Button size="lg" className={"shadow-md"}>
              <PlusIcon></PlusIcon>
              <span className="hidden md:inline">Novo Pagamento</span>
            </Button>
          </DialogTrigger>

          <DialogContent className={"max-w-4xl! w-full!"}>
            <DialogHeader>
              <DialogTitle className="text-primary-text font-bold text-xl">
                Novo Pagamento
              </DialogTitle>
            </DialogHeader>

            <PaymentForm
              {...{ unidades, soliciantes, setores, prestadores, pagamentos }}
            ></PaymentForm>
          </DialogContent>
        </Dialog>
      </div>
      <PaymentsList
        onSelectPayment={handleSheetOpen}
        payments={teste}
      ></PaymentsList>

      <PaymentSheet
        payment={selectedPayment}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      ></PaymentSheet>
    </div>
  );
}

export default Payments;
