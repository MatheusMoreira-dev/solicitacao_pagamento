import { Button } from "@/components/ui/button";
import { Printer, Download, EyeDashed, Repeat } from "lucide-react";
import { formatMoney } from "@/services/utils";

function PaymentItem({ payment, onClick, handleRepeatAction }) {
  function handleAction(e, callback, ...args) {
    e.stopPropagation();
    callback?.(...args);
  }

  function handleDownload() {
    console.log(payment);
  }

  function handlePrint() {
    console.log(payment);
  }

  return (
    <div
      onClick={onClick}
      className="w-full bg-surface rounded-xl shadow-xl py-4 px-6 relative ring ring-border cursor-pointer hover:ring-2 hover:ring-secondary hover:scale-105 transition-transform duration-300 hover:z-25"
    >
      <p className="absolute top-4 right-4 text-secondary-text text-sm">
        {payment?.dataPagamento || ""}
      </p>

      <p className="font-bold mb-1 text-primary-text">
        {payment?.prestador || ""}
      </p>
      <p className="text-primary-text mb-2 text-sm">
        {formatMoney(payment?.valor || "")}
      </p>

      <p className="line-clamp-2 text-secondary-text text-xs">
        {payment?.descricao || ""}
      </p>

      <div className="flex flex-wrap w-full gap-2 mt-3">
        <Button onClick={(e) => handleAction(e, handlePrint)}>
          <Printer></Printer>
          <span className="hidden sm:inline">Imprimir</span>
        </Button>

        <Button
          variant="secondary"
          onClick={(e) => handleAction(e, handleDownload)}
        >
          <Download></Download>
          <span className="hidden sm:inline">Baixar</span>
        </Button>

        <Button
          variant="quaternary"
          onClick={(e) => handleAction(e, handleRepeatAction, payment)}
        >
          <Repeat></Repeat>
          <span className="hidden sm:inline">Replicar</span>
        </Button>
      </div>
    </div>
  );
}

export default PaymentItem;
