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
import { batchFormData } from "@/services/api";

const payments = [
  {
    prestador: {
      razaoSocial: "Matheus",
      nomeFantasia: "Fantasia",
      cnpj: "1234567890",
    },
    valor: 1201,
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
    dataPagamento: 1793407920000,
    metodoPagamento: { nome: "Boleto", tipo: "Boleto" },
    dataSolicitacao: "2026-10-01",
    unidade: { nome: "SEDE", cnpj: "1232112421", cod: "12345" },
    setor: { nome: "Marketing", ramal: 2018 },
    solicitante: { nome: "Matheus Moreira Marcelino" },
  },
];

const teste = new Array(10)
  .fill(payments[0])
  .map((v) => ({ ...v, id: crypto.randomUUID() }));

function Payments() {
  const [repeat, setRepeat] = useState(false);
  const [payment, setPayment] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  function handleSheetOpen(payment) {
    setPayment(payment);
    setSheetOpen(true);
  }

  function handleCancelForm() {
    setFormOpen(false);
    setPayment(null);
    setRepeat(false);
  }

  function handleAddForm() {
    setPayment(null);
    setFormOpen(true);
  }

  function handleSave() {
    // Se for um pagamento novo ou repetição
    if (!payment || repeat) {
      // Chamar função para criar pagamento
    } else {
      // Chamar função para atualizar pagamento
    }

    setFormOpen(false);
    setRepeat(false);
  }

  function handleRepeatAction(payment) {
    setPayment(payment);
    setFormOpen(true);
    setRepeat(true);
  }

  function handleFormOpen(open) {
    if (!open) {
      handleCancelForm();
    } else {
      setFormOpen(true);
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="px-8 py-2 flex w-full items-center gap-3 justify-between">
        <Input
          id="search-input"
          type="text"
          placeholder="Pesquisa..."
          className={"py-5 max-w-3xl shadow-md"}
        ></Input>

        <Button size="lg" className={"shadow-md"} onClick={handleAddForm}>
          <PlusIcon></PlusIcon>
          <span className="hidden md:inline">Pagamento</span>
        </Button>
      </div>

      <PaymentsList
        handleRepeatAction={handleRepeatAction}
        onSelectPayment={handleSheetOpen}
        payments={teste}
      ></PaymentsList>

      {/*Detalhes do pagamento*/}
      <PaymentSheet
        payment={payment}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      ></PaymentSheet>

      {/*Form do pagamento*/}
      <Dialog open={formOpen} onOpenChange={handleFormOpen}>
        <DialogContent className={"max-w-4xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              {!payment || repeat ? "Novo Pagamento" : "Editar Pagamento"}
            </DialogTitle>
          </DialogHeader>

          <PaymentForm
            selectOptions={batchFormData()}
            initialData={payment}
            onSubmit={handleSave}
            onCancel={handleCancelForm}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Payments;
