import DataTable from "@/components/DataTable";
import ServiceProviderItem from "@/features/serviceProviders/components/ServiceProviderItem";

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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 px-8 py-2">
      {testeData.map((v) => (
        <ServiceProviderItem serviceProvider={v} />
      ))}
    </div>
  );
}

export default ServiceProviders;
