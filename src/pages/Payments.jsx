import PaymentsList from "../components/PaymentsList";
import PaymentForm from "@/components/PaymentForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const payments = [
  {
    prestador: "Matheus",
    valor: 12.0,
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime
      eligendi eum sequi totam aspernatur voluptatibus a quas cupiditate.
      Reiciendis omnis tempora maiores atque illo corporis culpa nihil iusto
      debitis!`,
    dataPagamento: "2026-10-12",
  },
];

const teste = new Array(10).fill(payments[0]);

function Payments() {
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
              Novo Pagamento
            </Button>
          </DialogTrigger>

          <DialogContent className={"max-w-4xl! w-full!"}>
            <DialogHeader className={"text-primary-text font-bold text-xl"}>
              Novo Pagamento
            </DialogHeader>

            <PaymentForm></PaymentForm>

            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button variant="secondary">Limpar</Button>
              <Button className="w-32">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <PaymentsList payments={teste}></PaymentsList>
    </div>
  );
}

export default Payments;
