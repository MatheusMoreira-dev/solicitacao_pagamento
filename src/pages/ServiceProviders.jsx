import ServiceProvidersPagination from "@/features/serviceProviders/components/ServiceProvidersPagination";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { PlusIcon, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ServiceProviderForm from "@/features/serviceProviders/components/ServiceProviderForm";
import {
  createServiceProvider,
  getServiceProviders,
} from "@/features/serviceProviders/services/serviceProvidersService";

const listServiceProviders = [
  {
    razaoSocial: "Fontenele e Bonfim",
    nomeFantasia: "BSG",
    cnpj: "122144312545",
  },
];

const testeData = new Array(20).fill(listServiceProviders[0]);

function ServiceProviders() {
  const [formOpen, setFormOpen] = useState(false);
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    async function loadServiceProviders() {
      const result = await getServiceProviders();
      setServiceProviders(result);
    }

    loadServiceProviders();
  }, []);

  async function handleSubmit(values) {
    try {
      await createServiceProvider(values);
      setFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="shrink-0 px-8 py-2 flex w-full items-center gap-3 justify-between bg-background">
        <InputGroup className="max-w-md">
          <InputGroupInput placeholder="Search..." />

          <InputGroupAddon>
            <Search />
          </InputGroupAddon>

          {true && (
            <>
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <X></X>
                </InputGroupButton>
              </InputGroupAddon>

              <InputGroupAddon align="inline-end">
                {`${0} resultado${0 > 1 ? "s" : ""}`}
              </InputGroupAddon>
            </>
          )}
        </InputGroup>

        <Button size="lg" onClick={() => setFormOpen(true)}>
          <PlusIcon></PlusIcon>
          <span className="hidden md:inline">Cadastrar Prestador</span>
        </Button>
      </div>

      <ServiceProvidersPagination serviceProviders={serviceProviders} />

      {/*Form Cadastrar Prestador*/}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className={"max-w-2xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              Cadastrar Prestador
            </DialogTitle>
          </DialogHeader>

          <ServiceProviderForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ServiceProviders;
