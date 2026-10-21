import PaymentItem from "./PaymentItem";

function PaymentsList({ payments = [] }) {
  return (
    <div className="flex flex-col gap-2 p-10 overflow-y-auto overflow-x-hidden scrollbar-thin">
      {payments.map((p) => (
        <PaymentItem {...p}></PaymentItem>
      ))}
    </div>
  );
}

export default PaymentsList;
