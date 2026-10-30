import { formatarMoedaPTBR } from "@/services/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Printer, Download, Repeat, Edit, Trash2 } from "lucide-react";

function PaymentDetails({ payment }) {
  return (
    <div className="px-4">
      <div>
        <div className="h-64 rounded-xl ring ring-secondary"></div>

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
          <Button variant="outline">
            <Edit></Edit>
            <span className="hidden sm:inline">Editar</span>
          </Button>
          <Button variant="outline">
            <Trash2></Trash2>
            <span className="hidden sm:inline">Excluir</span>
          </Button>
        </div>
      </div>

      <Separator className="my-3" />

      <div>
        <p className="text-sm text-secondary-text mb-1">
          {payment.dataPagamento}
        </p>
        <h1 className="text-xl font-bold line-clamp-1 text-primary-text">
          {payment.prestador?.nomeFantasia
            ? payment.prestador?.razaoSocial +
              " - " +
              payment.prestador.nomeFantasia
            : payment.prestador?.razaoSocial || ""}
        </h1>
        <p>{formatarMoedaPTBR(payment.valor)}</p>

        <p className="mt-3 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
          {payment.descricao}
        </p>

        <div className="grid gap-1 mt-6">
          <div className="flex gap-2">
            <span className="text-secondary-text">Solicitação:</span>
            <p className="text-primary-text">{payment.dataSolicitacao}</p>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-text">Unidade:</span>
            <p className="text-primary-text">{payment.unidade.nome}</p>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-text">Setor:</span>
            <p className="text-primary-text">{payment.setor.nome}</p>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-text">Solicitante:</span>
            <p className="text-primary-text">{payment.solicitante.nome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
