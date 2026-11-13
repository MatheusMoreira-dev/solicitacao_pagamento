import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "./ui/item";

import { Badge } from "./ui/badge";
import { FaCheck } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

import { Button } from "./ui/button";

function DebtCard({ debt }) {
  const paid = debt?.paid === debt?.total;

  return (
    <Item variant="outline" className="relative overflow-hidden">
      <ItemHeader>
        <Badge variant="outline">{debt?.unidade || "SEDE"}</Badge>
        {!paid ? (
          <Badge variant="destructive">{`R$ ${debt.total - debt.paid},00`}</Badge>
        ) : (
          <Badge className="bg-green-600">
            <FaCheck /> Pago
          </Badge>
        )}
      </ItemHeader>

      <ItemContent>
        <ItemTitle>{debt.prestador}</ItemTitle>
        <ItemDescription>{debt.descricao}</ItemDescription>
      </ItemContent>

      <ItemFooter>
        <div>
          <span className="text-xs text-muted-foreground">Total: </span>
          <span className="">R$ {debt.total},00</span>
        </div>

        {!paid && (
          <Button
            variant="outline"
            className="rounded-full px-8 border-primary text-primary text-sm"
          >
            <AiFillDollarCircle />
            Pagar
          </Button>
        )}
      </ItemFooter>
    </Item>
  );
}

export default DebtCard;
