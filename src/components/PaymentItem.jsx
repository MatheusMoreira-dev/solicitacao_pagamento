import { Button } from "@/components/ui/button";
import { Printer, Download, EyeDashed } from "lucide-react";

function PaymentItem({ prestador, valor, descricao, dataPagamento }) {
  return (
    <div className="w-full bg-surface rounded-xl shadow-xl p-4 relative ring ring-border cursor-pointer hover:ring-2 hover:ring-secondary hover:scale-105 transition-transform duration-300 hover:z-50">
      <p className="absolute top-4 right-4 text-secondary-text text-sm">
        {dataPagamento}
      </p>

      <p className="font-bold text-xl mb-1 text-primary-text">{prestador}</p>
      <p className="text-primary-text mb-3">{valor}</p>

      <p className="line-clamp-3">{descricao}</p>

      <div className="flex w-full gap-2 mt-3">
        <Button>
          <Printer></Printer>
          Imprimir
        </Button>
        <Button variant="secondary">
          <Download></Download>
          Baixar
        </Button>
        <Button variant="outline">
          <EyeDashed></EyeDashed>
          Visualizar
        </Button>
      </div>
    </div>
  );
}

export default PaymentItem;
