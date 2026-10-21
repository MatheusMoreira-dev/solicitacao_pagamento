import PaymentItem from "./PaymentItem";

function PaymentsList({ payments = [] }) {
  return (
    <div className="flex flex-col gap-2 p-8 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-tertiary">
      {payments.map((p) => (
        <PaymentItem {...p}></PaymentItem>
      ))}
    </div>
  );
}

export default PaymentsList;
