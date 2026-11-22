import { createContext } from "react";

import {
  createServiceProvider,
  listenServiceProviders,
  deleteServiceProvider,
} from "../services/serviceProvidersService";

import { useState, useEffect } from "react";

export const ServicesProvidersContext = createContext({});

export function ServicesProvidersProvider({ children }) {
  const [servicesProviders, setServicesProviders] = useState([]);

  useEffect(() => {
    const unsubscribeServicesProviders = listenServiceProviders({
      onChange: (data) => setServicesProviders(data),
      onError: (err) => console.log(err),
    });

    return () => {
      unsubscribeServicesProviders();
    };
  }, []);

  async function handleAddServiceProvider(serviceProvider) {
    try {
      await createServiceProvider(serviceProvider);
    } catch (error) {
      console.error("Erro ao criar prestador:", error);
    }
  }

  async function handleUpdateServiceProvider(id, data) {}

  return (
    <ServicesProvidersContext.Provider
      value={{
        servicesProviders,
        addServiceProvider: handleAddServiceProvider,
        deleteServiceProvider,
        updateServiceProvider: handleUpdateServiceProvider,
      }}
    >
      {children}
    </ServicesProvidersContext.Provider>
  );
}
