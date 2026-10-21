import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

function PaymentForm() {
  return (
    <form className="w-full min-w-0">
      <Field>
        <FieldLabel>Unidade</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Nome Solicitante</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Setor Solicitante</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Prestador</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Valor</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Data de Pagamento</FieldLabel>
      </Field>

      <Field>
        <FieldLabel>Método de Pagamento</FieldLabel>
      </Field>

      <Field>
        <FieldLabel htmlFor="descricao">Descrição</FieldLabel>
        <Textarea id="descricao" name="descricao"></Textarea>
      </Field>
    </form>
  );
}

export default PaymentForm;
