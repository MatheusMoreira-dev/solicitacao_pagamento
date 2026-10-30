import { Input } from "@/components/ui/input";
import { formatarMoedaPTBR } from "@/services/utils";

function MoneyInput({ value = 0, onChange, ...props }) {
  const texto = formatarMoedaPTBR(value);

  function handleChange(e) {
    const digitos = e.target.value.replace(/\D/g, "");
    onChange?.(digitos ? Number(digitos) : 0);
  }

  return (
    <Input
      {...props}
      type="text"
      inputMode="numeric"
      value={texto}
      onChange={handleChange}
    />
  );
}

export default MoneyInput;
