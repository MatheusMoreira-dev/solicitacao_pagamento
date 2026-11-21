import { useContext } from "react";
import { ServicesProvidersContext } from "@/features/serviceProviders/context/ServicesProvidersContext";

export function useServicesProviders() {
  const context = useContext(ServicesProvidersContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useServicesProviders se o componente estiver dentro do contexto ",
    );

  return context;
}
