import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      "Só é possível utilizar o useUser se o componente estiver dentro do contexto ",
    );

  return context;
}
