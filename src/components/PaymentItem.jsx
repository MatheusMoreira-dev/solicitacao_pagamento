import { Button } from "@/components/ui/button";
import { Printer, Download, EyeDashed, Repeat } from "lucide-react";
import { formatMoney } from "@/services/utils";

function PaymentItem({ prestador, valor, descricao, dataPagamento, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full bg-surface rounded-xl shadow-xl py-4 px-6 relative ring ring-border cursor-pointer hover:ring-2 hover:ring-secondary hover:scale-105 transition-transform duration-300 hover:z-25"
    >
      <p className="absolute top-4 right-4 text-secondary-text text-sm">
        {dataPagamento}
      </p>

      <p className="font-bold mb-1 text-primary-text">{prestador}</p>
      <p className="text-primary-text mb-2 text-sm">{formatMoney(valor)}</p>

      <p className="line-clamp-2 text-secondary-text text-xs">{descricao}</p>

      <div className="flex flex-wrap w-full gap-2 mt-3">
        <Button>
          <Printer></Printer>
          <span className="hidden sm:inline">Imprimir</span>
        </Button>
        <Button variant="secondary">
          <Download></Download>
          <span className="hidden sm:inline">Baixar</span>
        </Button>
        <Button variant="quaternary">
          <Repeat></Repeat>
          <span className="hidden sm:inline">Replicar</span>
        </Button>
      </div>
    </div>
  );
}

export default PaymentItem;
