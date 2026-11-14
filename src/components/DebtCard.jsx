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

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

import { Button } from "./ui/button";
import { useState } from "react";

function DebtCard({ debt }) {
  const [paid, setPaid] = useState(debt?.paid === debt?.total);

  return (
    <Item
      variant="outline"
      className="relative overflow-hidden hover:ring-2 ring-secondary hover:scale-105 transition-all duration-300"
    >
      <ItemHeader>
        <Badge variant="outline">{debt?.unidade || "SEDE"}</Badge>
        {!paid ? (
          <Badge variant="destructive">Pendente</Badge>
        ) : (
          <Badge className="bg-green-600">
            <FaCheck /> Pago
          </Badge>
        )}
      </ItemHeader>

      <ItemContent>
        <ItemTitle>{debt.prestador}</ItemTitle>
        <div className="text-sm">
          {!paid && <span>{`R$ ${debt.paid},00 / `}</span>}
          <span>{`R$ ${debt.total},00`}</span>
        </div>
        <ItemDescription>{debt.descricao}</ItemDescription>
      </ItemContent>

      <ItemFooter className="justify-end">
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
