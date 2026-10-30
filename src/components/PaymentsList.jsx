import PaymentItem from "./PaymentItem";

function PaymentsList({ payments = [], onSelectPayment, handleRepeatAction }) {
  return (
    <div className="grid lg:grid-cols-2 min-h-0 flex-1 gap-2 p-8 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-tertiary">
      {payments.map((p) => (
        <PaymentItem
          key={p.id}
          payment={p}
          onClick={() => onSelectPayment(p)}
          handleRepeatAction={handleRepeatAction}
        ></PaymentItem>
      ))}
    </div>
  );
}

export default PaymentsList;
