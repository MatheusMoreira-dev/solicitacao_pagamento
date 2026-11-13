import {
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
  CardDescription,
  Card,
} from "./ui/card";

import { Badge } from "./ui/badge";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function DebtCard({ debt }) {
  const [paid, setPaid] = useState(debt?.total - debt?.paid >= 0);

  return (
    <Card className="h-min">
      <CardHeader>
        <CardTitle>{debt.prestador}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {debt.descricao}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {paid ? (
          <Badge variant="destructive">{`R$ ${debt.paid},00 / ${debt.total},00`}</Badge>
        ) : (
          <Badge className="bg-green-600">
            <FaCheck /> Pago
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}

export default DebtCard;
