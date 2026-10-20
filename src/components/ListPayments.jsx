import PaymentItem from "./PaymentItem";

function ListPayments({ payments = [] }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      {payments.map((p) => (
        <PaymentItem {...p}></PaymentItem>
      ))}
    </div>
  );
}

export default ListPayments;
