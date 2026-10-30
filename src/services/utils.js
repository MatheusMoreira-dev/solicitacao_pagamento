// Converte em texto no formato de dinheiro
function formatarMoedaPTBR(centavos, format = "pt-BR", currency = "BRL") {
  const valor = String(centavos).padStart(3, "0");
  const reais = valor.slice(0, -2);
  const decimais = valor.slice(-2);

  return `R$ ${reais.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimais}`;
}

export { formatarMoedaPTBR as formatMoney };
