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
import ExpensePagination from "@/features/expense/components/ExpensePagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentRequestForm from "@/features/paymentRequest/components/PaymentRequestForm";
import { useExpenses } from "@/features/expense/hooks/useExpenses";

function Expenses() {
  const { expenses, loading, addExpense } = useExpenses();

  const [formOpen, setFormOpen] = useState(false);
  const [formPayment, setFormPayment] = useState(false);

  function handleFormOpen(open) {
    setFormOpen(open);
  }

  function handleFormPayment(open) {
    setFormPayment(open);
  }

  async function handleSubmit(values) {
    addExpense(values);
    setFormOpen(false);
  }

  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="shrink-0 px-8 py-2 flex w-full items-center gap-3 justify-between bg-background">
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

      <Tabs className="px-8 mt-2 mb-4" defaultValues="pendentes">
        <TabsList>
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="atrasadas">Atrasadas</TabsTrigger>
          <TabsTrigger value="solicitadas">Solicitadas</TabsTrigger>
          <TabsTrigger value="pago">Pagas</TabsTrigger>
        </TabsList>
      </Tabs>

      <ExpensePagination
        expenses={expenses}
        loading={loading}
        handlePaymentRequest={handleFormPayment}
      />

      {/*Form Cadastrar Dívida*/}
      <Dialog open={formOpen} onOpenChange={handleFormOpen}>
        <DialogContent className={"max-w-2xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              Cadastrar Despesa
            </DialogTitle>
          </DialogHeader>

          <ExpenseForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      {/*Form Cadastrar Pagamento*/}
      <Dialog open={formPayment} onOpenChange={handleFormPayment}>
        <DialogContent className={"max-w-2xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              Solicitar Pagamento
            </DialogTitle>
          </DialogHeader>

          <PaymentRequestForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Expenses;
