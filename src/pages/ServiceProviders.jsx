import DataTable from "@/components/DataTable";

const listServiceProviders = [
  {
    razaoSocial: "Fontenele e Bonfim",
    nomeFantasia: "BSG",
    cnpj: "122144312545",
  },
];

const columns = [
  {
    accessorKey: "razaoSocial",
    header: "Razão Social",
  },
  {
    accessorKey: "nomeFantasia",
    header: "Nome Fantasia",
  },
  {
    accessorKey: "cnpj",
    header: "CNPJ",
  },
];

const testeData = new Array(20).fill(listServiceProviders[0]);

function ServiceProviders({ serviceProviders = [] }) {
  return (
    <div className="px-8">
      <DataTable columns={columns} data={testeData}></DataTable>
    </div>
  );
}

export default ServiceProviders;
