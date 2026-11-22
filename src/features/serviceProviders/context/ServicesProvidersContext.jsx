import { createContext } from "react";

import {
  createServiceProvider,
  listenServiceProviders,
  deleteServiceProvider,
  updateServiceProvider,
} from "../services/serviceProvidersService";

import { useState, useEffect } from "react";

export const ServicesProvidersContext = createContext({});

export function ServicesProvidersProvider({ children }) {
  const [servicesProviders, setServicesProviders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribeServicesProviders = listenServiceProviders({
      onChange: (data) => setServicesProviders(data),
      onError: (err) => console.log(err),
    });

    return () => {
      unsubscribeServicesProviders();
    };
  }, []);

  async function addServiceProvider(serviceProvider) {
    try {
      setLoading(true);
      await createServiceProvider(serviceProvider);
      return true;
    } catch (error) {
      console.error("Erro ao criar prestador:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function editServiceProvider(data) {
    try {
      setLoading(true);
      await updateServiceProvider(data.id, data);
      return true;
    } catch (error) {
      console.error("Erro ao editar prestador:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function delServiceProvider(id) {
    try {
      setLoading(true);
      await deleteServiceProvider(id);
      return true;
    } catch (error) {
      console.error("Erro ao excluir prestador:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ServicesProvidersContext.Provider
      value={{
        servicesProviders,
        loading,
        error,
        addServiceProvider,
        delServiceProvider,
        editServiceProvider,
      }}
    >
      {children}
    </ServicesProvidersContext.Provider>
  );
}
