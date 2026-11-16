import PaymentRequestItem from "./PaymentRequestItem";

function PaymentRequestList({
  payments = [],
  onSelectPayment,
  handleRepeatAction,
}) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 min-h-0 flex-1 gap-2 px-8 py-2">
      {payments.map((p) => (
        <PaymentRequestItem
          key={p.id}
          payment={p}
          onClick={() => onSelectPayment(p)}
          handleRepeatAction={handleRepeatAction}
        ></PaymentRequestItem>
      ))}
    </div>
  );
}

export default PaymentRequestList;
