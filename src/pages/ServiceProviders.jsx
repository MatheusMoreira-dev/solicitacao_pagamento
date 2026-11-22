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
import { createServiceProvider } from "@/features/serviceProviders/services/serviceProvidersService";
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
  const { servicesProviders, deleteServiceProvider } = useServicesProviders();
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemID, setItemID] = useState(null);

  async function handleSubmit(values) {
    try {
      await createServiceProvider(values);
      setFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleConfirmDelete(id) {
    setDeleteOpen(true);
    setItemID(id);
  }

  async function handleDelete() {
    try {
      await deleteServiceProvider(itemID);
    } catch (err) {
      console.log(err);
    } finally {
      setDeleteOpen(false);
      setItemID(null);
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
      />

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

      {/*Alert confirmar delete */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja excluir?</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>

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
