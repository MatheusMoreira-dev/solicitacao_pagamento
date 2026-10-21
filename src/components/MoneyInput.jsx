import { useState } from "react";
import { Input } from "@/components/ui/input";

// Converte em texto no formato de dinheiro
const formatMoney = (value, format = "pt-BR", currency = "BRL") => {
  return new Intl.NumberFormat(format, { style: "currency", currency }).format(
    value,
  );
};

function MoneyInput({ value, onChange, ...props }) {
  const [texto, setTexto] = useState(
    value != null && value !== "" ? formatMoney(Number(value)) : "",
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
        {...props}
        type="text"
        inputMode="numeric"
        value={texto}
        onChange={handleChange}
        placeholder="R$ 0,00"
      ></Input>
    </>
  );
}

export default MoneyInput;
