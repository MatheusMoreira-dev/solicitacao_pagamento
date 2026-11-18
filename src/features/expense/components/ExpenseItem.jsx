import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "../../../components/ui/item";

import { Badge } from "../../../components/ui/badge";
import { FaCheck } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

import { Button } from "../../../components/ui/button";
import { GoAlertFill } from "react-icons/go";

import { formatarMoedaPTBR } from "@/services/utils";

const badges = {
  pago: (
    <Badge className="bg-green-500/10 text-green-600 focus-visible:ring-green-500/20 dark:bg-green-500/20 dark:focus-visible:ring-green-500/40 [a]:hover:bg-green-500/20">
      <FaCheck /> Pago
    </Badge>
  ),
  pendente: (
    <Badge className="bg-yellow-500/10 text-yellow-600 focus-visible:ring-yellow-500/20 dark:bg-yellow-500/20 dark:focus-visible:ring-yellow-500/40 [a]:hover:bg-yellow-500/20">
      Pendente
    </Badge>
  ),
  solicitado: (
    <Badge className="bg-blue-500/10 text-blue-600 focus-visible:ring-blue-500/20 dark:bg-blue-500/20 dark:focus-visible:ring-blue-500/40 [a]:hover:bg-blue-500/20">
      Solicitado
    </Badge>
  ),
  atrasada: (
    <Badge variant="destructive">
      <GoAlertFill /> Atrasada
    </Badge>
  ),
};

function ExpenseItem({ expense, handlePaymentRequest }) {
  const paid = expense?.paid === expense?.valorTotal;

  return (
    <Item
      variant="outline"
      size="sm"
      className="relative overflow-hidden hover:scale-105 hover:ring-1 hover:ring-secondary transition-transform duration-300 cursor-pointer"
    >
      <ItemHeader>
        <Badge variant="outline">{expense.unidade?.nome || "SEDE"}</Badge>
        {badges[expense.status] ?? badges.pendente}
      </ItemHeader>

      <ItemContent>
        <ItemTitle>{expense.prestador?.razaoSocial}</ItemTitle>
        {!paid ? (
          <p className="text-muted-foreground">{`${formatarMoedaPTBR(expense.paid || 0)} / ${formatarMoedaPTBR(expense.valorTotal)}`}</p>
        ) : (
          <p className="text-muted-foreground">{`${formatarMoedaPTBR(expense.valorTotal)}`}</p>
        )}
        <ItemDescription>{expense.descricao}</ItemDescription>
      </ItemContent>

      <ItemFooter>
        <div className="flex justify-end w-full">
          {!paid && (
            <Button onClick={handlePaymentRequest} variant="ghost" size="sm">
              <IoIosSend />
              Solicitar
            </Button>
          )}
        </div>
      </ItemFooter>
    </Item>
  );
}

export default ExpenseItem;
