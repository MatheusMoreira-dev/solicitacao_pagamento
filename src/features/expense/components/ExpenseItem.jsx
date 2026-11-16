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
import { AiFillDollarCircle } from "react-icons/ai";

import { Button } from "../../../components/ui/button";

function ExpenseItem({ expense }) {
  const paid = expense?.paid === expense?.total;

  return (
    <Item variant="outline" className="relative overflow-hidden">
      <ItemHeader>
        <Badge variant="outline">{expense.unidade?.nome || "SEDE"}</Badge>
        {!paid ? (
          <Badge variant="destructive">Pendente</Badge>
        ) : (
          <Badge className="bg-green-400">
            <FaCheck /> Pago
          </Badge>
        )}
      </ItemHeader>

      <ItemContent>
        <ItemTitle>{expense.prestador?.razaoSocial}</ItemTitle>
        <ItemDescription>{expense.descricao}</ItemDescription>
      </ItemContent>

      <ItemFooter>
        {!paid ? (
          <p className="text-muted-foreground">{`R$ ${expense.paid},00 / ${expense.total},00`}</p>
        ) : (
          <p className="text-muted-foreground">{`R$ ${expense.total},00`}</p>
        )}

        {!paid && (
          <Button
            variant="outline"
            className="px-4 text-sm text-primary border-primary rounded-full"
          >
            <AiFillDollarCircle />
            Solicitar Pag.
          </Button>
        )}
      </ItemFooter>
    </Item>
  );
}

export default ExpenseItem;
