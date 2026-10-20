function PaymentItem({ prestador, valor, descricao, dataPagamento }) {
  return (
    <div className="w-full bg-surface rounded-xl shadow-xl p-4 relative ring ring-border hover:ring-2 hover:ring-secondary">
      <p className="absolute top-4 right-4 text-secondary-text text-sm">
        {dataPagamento}
      </p>

      <p className="font-bold text-xl mb-1 text-primary-text">{prestador}</p>
      <p className="text-primary-text mb-3">{valor}</p>

      <p className="line-clamp-3">{descricao}</p>

      <div className="flex w-full gap-2 mt-3">
        <button className="bg-primary px-3 py-1 text-white rounded-md">
          Imprimir
        </button>

        <button className="bg-secondary px-3 py-1 text-white rounded-md">
          Baixar
        </button>
      </div>
    </div>
  );
}

export default PaymentItem;
