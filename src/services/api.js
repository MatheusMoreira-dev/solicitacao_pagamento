async function getPayments() {}

async function getServicesProviders() {}

function batchFormData() {
  const unidades = [
    { nome: "SEDE", cnpj: "1" },
    { nome: "HUC", cnpj: "2" },
    { nome: "NAS", cnpj: "3" },
    { nome: "LAGOA", cnpj: "4" },
  ];

  const solicitantes = [
    { nome: "Matheus Moreira Marcelino", ramal: 2018, setor: "Marketing" },
  ];

  const setores = [{ nome: "Marketing", unidade: "SEDE", ramal: 2018 }];

  const prestadores = [
    {
      nomeFantasia: "BSG",
      razaoSocial: "Sublime",
      cnpj: "111",
      metodosPagamento: {},
    },
  ];

  const metodosPagamento = [
    { nome: "Boleto", valor: "boleto" },
    { nome: "Cheque", valor: "cheque" },
    { nome: "Cartão Corporativo", valor: "cartao" },
    { banco: "Banco do Brasil", agencia: "10223-10" },
  ];

  return { unidades, solicitantes, setores, prestadores, metodosPagamento };
}

export { batchFormData };
