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
import { useState, useEffect } from "react";
import { createExpense } from "@/features/expense/services/expenseService";
import { batchFormData } from "@/features/paymentRequest/services/paymentRequestService";
import ExpensePagination from "@/features/expense/components/ExpensePagination";
import { getExpenses } from "@/features/expense/services/expenseService";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GoAlertFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [pageCursors, setPageCursors] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    async function loadExpenses() {
      const lastDoc = pageCursors[page - 1] ?? null;

      const result = await getExpenses({
        lastDoc,
      });

      setExpenses(result.expenses);
      setHasMore(result.hasMore);

      if (result.lastDoc) {
        setPageCursors((prev) => ({
          ...prev,
          [page]: result.lastDoc,
        }));
      }
    }

    loadExpenses();
  }, [page, expenses]);

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
        page={page}
        setPage={setPage}
        hasMore={hasMore}
      />

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
