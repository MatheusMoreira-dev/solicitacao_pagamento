import ExpenseItem from "@/features/expense/components/ExpenseItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ExpensePagination({ expenses, page, setPage, hasMore }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-8 py-2">
          {expenses.map((v) => (
            <ExpenseItem key={v.id} expense={v} />
          ))}
        </div>
      </div>

      <Pagination className="shrink-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Anterior"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              text="Próxima"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!hasMore}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ExpensePagination;
