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
import { useServicesProviders } from "@/features/serviceProviders/hooks/useServiceProviders";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function ServiceProviders() {
  const {
    servicesProviders,
    loading,
    error,
    addServiceProvider,
    delServiceProvider,
    editServiceProvider,
  } = useServicesProviders();

  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemID, setItemID] = useState(null);
  const [serviceProvider, setServiceProvider] = useState(null);

  async function handleSubmit(values) {
    const submitFunction = serviceProvider
      ? editServiceProvider
      : addServiceProvider;

    const success = await submitFunction(values);
    handleOpenForm(false);
  }

  function handleSetEditMode(data) {
    setFormOpen(true);
    setServiceProvider(data);
  }

  function handleOpenForm(open) {
    setFormOpen(open);
    if (!open) {
      setTimeout(() => setServiceProvider(null), 200);
    }
  }

  const handleSetDeleteOpen = (open) => {
    setDeleteOpen(open);
    if (!open) setItemID(null);
  };

  function handleConfirmDelete(id) {
    setDeleteOpen(true);
    setItemID(id);
  }

  async function handleDelete() {
    const success = await delServiceProvider(itemID);

    if (success) {
      handleSetDeleteOpen(false);
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

      <ServiceProvidersPagination
        serviceProviders={servicesProviders}
        onDelete={handleConfirmDelete}
        onEdit={handleSetEditMode}
      />

      {/*Form Prestador*/}
      <Dialog open={formOpen} onOpenChange={handleOpenForm}>
        <DialogContent className={"max-w-2xl! w-full!"}>
          <DialogHeader>
            <DialogTitle className="text-primary-text font-bold text-xl">
              {serviceProvider ? "Editar Prestador" : "Cadastrar Prestador"}
            </DialogTitle>
          </DialogHeader>

          <ServiceProviderForm
            onSubmit={handleSubmit}
            initialData={serviceProvider}
          />
        </DialogContent>
      </Dialog>

      {/*Alert confirmar delete */}
      <AlertDialog open={deleteOpen} onOpenChange={handleSetDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja excluir?</AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogDescription>
            Esta ação não poderá ser desfeita.
          </AlertDialogDescription>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button variant="destructive" onClick={handleDelete}>
              Excluir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ServiceProviders;
