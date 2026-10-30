import { Button } from "@/components/ui/button";
import { Printer, Download, Repeat } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { formatarMoedaPTBR } from "@/services/utils";
import { useRef } from "react";
import PaymentDoc from "./PaymentDoc";

function PaymentItem({ payment, onClick, handleRepeatAction }) {
  const docRef = useRef(null);

  function handleAction(e, callback, ...args) {
    e.stopPropagation();
    callback?.(...args);
  }

  function handleDownload() {}

  const handlePrint = useReactToPrint({
    contentRef: docRef,
    documentTitle: "Solicitação de Pagamento",
  });

  return (
    <div
      onClick={onClick}
      className="w-full bg-surface rounded-xl shadow-xl py-4 px-6 relative ring ring-border cursor-pointer hover:ring-2 hover:ring-secondary hover:scale-105 transition-transform duration-300 hover:z-25 hover:shadow-2xl"
    >
      <p className="absolute top-4 right-4 text-secondary-text text-sm">
        {payment?.dataPagamento || ""}
      </p>

      <p className="font-bold mb-1 text-primary-text">
        {payment.prestador?.nomeFantasia
          ? payment.prestador?.razaoSocial +
            " - " +
            payment.prestador.nomeFantasia
          : payment.prestador?.razaoSocial || ""}
      </p>
      <p className="text-primary-text mb-2 text-sm">
        {formatarMoedaPTBR(payment?.valor || 0)}
      </p>

      <p className="line-clamp-2 text-secondary-text text-xs">
        {payment?.descricao || ""}
      </p>

      <div className="flex justify-end flex-wrap w-full gap-2 mt-3">
        <Button
          variant="tertiary"
          onClick={(e) => handleAction(e, handlePrint)}
        >
          <Printer></Printer>
        </Button>

        <Button
          variant="secondary"
          onClick={(e) => handleAction(e, handleDownload)}
        >
          <Download></Download>
        </Button>

        <Button onClick={(e) => handleAction(e, handleRepeatAction, payment)}>
          <Repeat></Repeat>
        </Button>
      </div>

      <div className="fixed left-0 top-0 -z-50 h-0 w-0 overflow-hidden">
        <div ref={docRef}>
          <PaymentDoc payment={payment} />
        </div>
      </div>
    </div>
  );
}

export default PaymentItem;
