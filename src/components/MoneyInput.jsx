import { useState } from "react";
import { Input } from "@/components/ui/input";
import { formatMoney } from "@/services/utils";

function MoneyInput({ value = "", onChange, ...props }) {
  const [texto, setTexto] = useState(
    value !== null && value !== "" ? formatMoney(Number(value)) : "",
  );

  function handleChange(e) {
    const digitos = e.target.value.replace(/\D/g, ""); // Retira as letras
    const valor = Number(digitos) / 100; // Transforma em numeral decimal

    setTexto(digitos ? formatMoney(valor) : ""); // Atualiza a variável texto
    onChange?.(digitos ? valor : ""); // Executa em onChange
  }

  return (
    <>
      <Input
        type="text"
        inputMode="numeric"
        value={texto}
        onChange={handleChange}
        placeholder="R$ 0,00"
        {...props}
      ></Input>
    </>
  );
}

export default MoneyInput;
