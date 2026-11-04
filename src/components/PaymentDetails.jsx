import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PaymentDoc from "@/components/PaymentDoc";
import { Printer, Download, Trash, Edit, Repeat } from "lucide-react";

function PaymentDetails({ payment, open, onOpenChange }) {
  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="max-w-max!">
          <SheetHeader>
            <div className="flex gap-16 px-4">
              <div className="flex gap-1">
                <Button variant="tertiary">
                  <Printer></Printer>
                </Button>

                <Button variant="secondary">
                  <Download></Download>
                </Button>

                <Button>
                  <Repeat></Repeat>
                </Button>
              </div>

              <div className="flex gap-1">
                <Button variant="destructive">
                  <Trash></Trash>
                </Button>

                <Button variant="outline">
                  <Edit></Edit>
                </Button>
              </div>
            </div>
          </SheetHeader>

          <div className="px-4 overflow-y-auto">
            <div>
              <PaymentDoc payment={payment}></PaymentDoc>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default PaymentDetails;
