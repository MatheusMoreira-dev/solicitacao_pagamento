import { createContext, useContext } from "react";
import {
  createServiceProvider,
  getServiceProviders,
} from "../services/serviceProvidersService";
import { useState, useEffect } from "react";

const ServicesProvidersContext = createContext({});

export function ServicesProvidersProvider({ children }) {
  const [servicesProviders, setServicesProviders] = useState([]);

  async function loadServicesProviders() {
    try {
      const result = await getServiceProviders();
      setServicesProviders(result);
    } catch (error) {
      console.error("Erro ao carregar prestadores:", error);
    }
  }

  useEffect(() => {
    loadServicesProviders();
  }, []);

  async function handleAddServiceProvider(serviceProvider) {
    try {
      await createServiceProvider(serviceProvider);
      await loadServicesProviders();
    } catch (error) {
      console.error("Erro ao criar despesa:", error);
    }
  }

  async function handleUpdateServiceProvider(id, data) {}

  async function handleDeleteServiceProvider(id) {}

  return (
    <ServicesProvidersContext.Provider
      value={{
        servicesProviders,
        addServiceProvider: handleAddServiceProvider,
        deleteServiceProvider: handleDeleteServiceProvider,
        updateServiceProvider: handleUpdateServiceProvider,
      }}
    >
      {children}
    </ServicesProvidersContext.Provider>
  );
}

export function useServicesProviders() {
  const context = useContext(ServicesProvidersContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useServicesProviders se o componente estiver dentro do contexto ",
    );

  return context;
}
