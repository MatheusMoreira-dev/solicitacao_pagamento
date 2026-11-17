import ExpenseItem from "@/features/expense/components/ExpenseItem";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ExpensePagination({
  expenses,
  page,
  hasMore,
  loading,
  onNext,
  onPrevious,
  handlePaymentRequest,
}) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-8 py-2">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handlePaymentRequest={handlePaymentRequest}
            />
          ))}
        </div>
      </div>

      <Pagination className="shrink-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Anterior"
              onClick={(event) => {
                event.preventDefault();
                onPrevious();
              }}
              disabled={page === 1 || loading}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              text="Próxima"
              onClick={(event) => {
                event.preventDefault();
                onNext();
              }}
              disabled={!hasMore || loading}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ExpensePagination;
