import PaymentItem from "./PaymentItem";

function PaymentsList({ payments = [], onSelectPayment, handleRepeatAction }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 p-8 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-tertiary">
      {payments.map((p) => (
        <PaymentItem
          payment={p}
          onClick={() => onSelectPayment(p)}
          handleRepeatAction={handleRepeatAction}
        ></PaymentItem>
      ))}
    </div>
  );
}

export default PaymentsList;
