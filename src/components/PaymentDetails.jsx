function PaymentDetails({
  dataSolicitacao,
  unidade,
  setor,
  solicitante,
  prestador,
  valor,
  descricao,
  dataPagamento,
  metodoPagamento,
}) {
  return (
    <div>
      {Object.values({
        dataSolicitacao,
        unidade,
        setor,
        solicitante,
        prestador,
        valor,
        descricao,
        dataPagamento,
        metodoPagamento,
      }).map((v) => (
        <p>{v}</p>
      ))}
    </div>
  );
}

export default PaymentDetails;
