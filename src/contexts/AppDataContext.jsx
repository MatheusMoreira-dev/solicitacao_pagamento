import { createContext, useContext, useEffect, useState } from "react";

// Cria o contexto
const AppDataContext = createContext({});

// Wrapper com contexto para os nós filhos
export function AppDataProvider({ children }) {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {}, []);

  async function handleAddServiceProvider(expense) {}

  async function handleUpdateServiceProvider(id, data) {}

  async function handleDeleteServiceProvider(id) {}

  return (
    <AppDataContext.Provider
      value={{
        serviceProviders,

        addServiceProvider: handleAddServiceProvider,
        deleteServiceProvider: handleDeleteServiceProvider,
        updateServiceProvider: handleUpdateServiceProvider,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

// Hook para usar o contexto
export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useAppData se o componente estiver dentro do contexto ",
    );

  return context;
}
