import { createContext } from "react";

import {
  createServiceProvider,
  getServiceProviders,
} from "../services/serviceProvidersService";

import { useState, useEffect } from "react";

export const ServicesProvidersContext = createContext({});

export function ServicesProvidersProvider({ children }) {
  const [servicesProviders, setServicesProviders] = useState([]);

  useEffect(() => {
    loadServicesProviders();
  }, []);

  async function loadServicesProviders() {
    try {
      const result = await getServiceProviders();
      setServicesProviders(result);
    } catch (error) {
      console.error("Erro ao carregar prestadores:", error);
    }
  }

  async function handleAddServiceProvider(serviceProvider) {
    try {
      await createServiceProvider(serviceProvider);
      await loadServicesProviders();
    } catch (error) {
      console.error("Erro ao criar prestador:", error);
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
