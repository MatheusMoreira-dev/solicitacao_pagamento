// Converte em texto no formato de dinheiro
const formatMoney = (value, format = "pt-BR", currency = "BRL") => {
  return new Intl.NumberFormat(format, { style: "currency", currency }).format(
    value,
  );
};

export { formatMoney };
