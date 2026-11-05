import PaymentsList from "../components/PaymentsList";
import PaymentForm from "@/components/PaymentForm";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { PlusIcon, Search } from "lucide-react";
import PaymentDetails from "@/components/PaymentDetails";
import { useState, useEffect } from "react";
import { batchFormData, createPayment, listenPayments } from "@/services/api";
import { normalizeString } from "@/services/utils";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [filterPayments, setFilterPayments] = useState([]);
  const [repeat, setRepeat] = useState(false);
  const [payment, setPayment] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    function handleLoadPayments(payments) {
      setPayments(payments);
      setFilterPayments(payments);
    }

    const unsubscribe = listenPayments(handleLoadPayments);

    return () => unsubscribe();
  }, []);

  function handleSearch(inputValue) {
    const normalizeStr = normalizeString(inputValue);

    if (!normalizeStr) {
      setFilterPayments(payments);
      return;
    }

    const parcial = payments.filter((object) =>
      Object.values(object)
        .map(normalizeString)
        .some((v) => v.includes(normalizeStr)),
    );

    setFilterPayments(parcial);
  }

  function handleDetailsOpen(payment) {
    setPayment(payment);
    setDetailsOpen(true);
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

  function handleSave(data) {
    // Se for um pagamento novo ou repetição
    if (!payment || repeat) {
      // Chamar função para criar pagamento
      createPayment(data);
      console.log(data);
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
    <div className="pb-10">
      <div className="sticky z-50 top-0 px-8 py-2 flex w-full items-center gap-3 justify-between bg-background">
        <InputGroup className="max-w-md">
          <InputGroupInput
            placeholder="Search..."
            onValueChange={handleSearch}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">{"resultados"}</InputGroupAddon>
        </InputGroup>

        <Button size="lg" onClick={handleAddForm}>
          <PlusIcon></PlusIcon>
          <span className="hidden md:inline">Pagamento</span>
        </Button>
      </div>

      <PaymentsList
        handleRepeatAction={handleRepeatAction}
        onSelectPayment={handleDetailsOpen}
        payments={filterPayments}
      ></PaymentsList>

      {/*Detalhes do pagamento*/}
      <PaymentDetails
        payment={payment}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      ></PaymentDetails>

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
