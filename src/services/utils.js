// Converte em texto no formato de dinheiro
function formatarMoedaPTBR(centavos, format = "pt-BR", currency = "BRL") {
  const valor = String(centavos).padStart(3, "0");
  const reais = valor.slice(0, -2);
  const decimais = valor.slice(-2);

  return `R$ ${reais.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimais}`;
}

function millisecondsToPTBRDate(milliseconds) {
  return new Date(milliseconds).toLocaleDateString("pt-br");
}

function formatDate(timestamp) {
  if (!timestamp) return "";

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function normalizeString(str) {
  if (!str) return "";

  return String(str).normalize("NFD").toLowerCase();
}

function extractObjValues(obj) {
  let values = [];

  for (let v of Object.values(obj)) {
    if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      values = values.concat(extractObjValues(v));
    } else {
      values.push(v);
    }
  }

  return values;
}

export {
  formatarMoedaPTBR,
  millisecondsToPTBRDate,
  formatDate,
  normalizeString,
  extractObjValues,
};
