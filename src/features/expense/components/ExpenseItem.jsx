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

function ExpenseItem({ debt }) {
  const paid = debt?.paid === debt?.total;

  return (
    <Item variant="outline" className="relative overflow-hidden">
      <ItemHeader>
        <Badge variant="outline">{debt?.unidade || "SEDE"}</Badge>
        {!paid ? (
          <Badge variant="destructive">Pendente</Badge>
        ) : (
          <Badge className="bg-green-400">
            <FaCheck /> Pago
          </Badge>
        )}
      </ItemHeader>

      <ItemContent>
        <ItemTitle>{debt.prestador}</ItemTitle>
        <ItemDescription>{debt.descricao}</ItemDescription>
      </ItemContent>

      <ItemFooter>
        {!paid ? (
          <p className="text-muted-foreground">{`R$ ${debt.paid},00 / ${debt.total},00`}</p>
        ) : (
          <p className="text-muted-foreground">{`R$ ${debt.total},00`}</p>
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
