import ExpenseItem from "@/features/expense/components/ExpenseItem";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon, Search, X } from "lucide-react";
import ExpenseForm from "@/features/expense/components/ExpenseForm";
import { useState } from "react";
import { createExpense } from "@/features/expense/services/expenseService";
import { batchFormData } from "@/features/paymentRequest/services/paymentRequestService";

function Expenses() {
  const [formOpen, setFormOpen] = useState(false);

  function handleFormOpen(open) {
    setFormOpen(open);
  }

  async function handleSubmit(values) {
    try {
      await createExpense(values);
      setFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  const debts = [
    {
      prestador: "Fontenele e Bonfim",
      paid: 100.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
  ];

  return (
    <div>
      <div className="sticky z-50 top-0 px-8 py-2 flex w-full items-center gap-3 justify-between bg-background">
        <InputGroup className="max-w-md">
          <InputGroupInput placeholder="Search..." />

          <InputGroupAddon>
            <Search />
          </InputGroupAddon>

          {true && (
            <>
              <InputGroupAddon
                align="inline-end"
                onClick={() => handleSearch("")}
              >
                <InputGroupButton>
                  <X></X>
                </InputGroupButton>
              </InputGroupAddon>

              <InputGroupAddon align="inline-end">
                {`${0} resultado${0 > 1 ? "s" : ""}`}
              </InputGroupAddon>
            </>
          )}
        </InputGroup>

        <Button size="lg" onClick={() => handleFormOpen(true)}>
          <PlusIcon></PlusIcon>
          <span className="hidden md:inline">Cadastrar Despesa</span>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 min-h-0 flex-1 gap-4 px-8 py-2">
        {debts.map((v) => (
          <ExpenseItem debt={v} />
        ))}
      </div>

      {/*Form do pagamento*/}
      <Dialog open={formOpen} onOpenChange={handleFormOpen}>
        <DialogContent className={"max-w-2xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              Cadastrar Despesa
            </DialogTitle>
          </DialogHeader>

          <ExpenseForm
            onSubmit={handleSubmit}
            selectOptions={batchFormData()}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Expenses;
