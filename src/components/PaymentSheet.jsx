import PaymentDetails from "@/components/PaymentDetails";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function PaymentSheet({ payment, open, onOpenChange }) {
  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="max-w-3xl!">
          <SheetHeader>
            <SheetTitle>Detalhes</SheetTitle>
          </SheetHeader>

          {payment && <PaymentDetails {...payment}></PaymentDetails>}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default PaymentSheet;
