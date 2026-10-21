import PaymentsList from "../components/PaymentsList";
import { Input } from "@/components/ui/input";

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
    <div className="payments max-w-7xl w-full mx-auto">
      <Input
        id="search-input"
        type="text"
        placeholder="Pesquisa..."
        className={"py-5"}
      ></Input>
      <PaymentsList payments={teste}></PaymentsList>
    </div>
  );
}

export default Payments;
