import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import MoneyInput from "@/components/MoneyInput";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { formatDate } from "@/services/utils";
import { Separator } from "@/components/ui/separator";

const emptyValues = {
  unidade: null,
  setor: null,
  solicitante: null,
  prestador: null,
  valor: "",
  dataPagamento: "",
  metodoPagamento: null,
  descricao: "",
};

function PaymentRequestForm({
  selectOptions = {},
  initialData = {},
  onSubmit,
  onCancel,
}) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: emptyValues,
  });

  // Adiciona os dados iniciais nos campos do form
  useEffect(() => {
    const payload = { ...emptyValues, ...initialData };

    payload["dataPagamento"] = formatDate(payload.dataPagamento);

    reset(payload);
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6"
    >
      <Controller
        name="setor"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>Setor</FieldLabel>
            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={selectOptions?.setores}
            >
              <ComboboxInput placeholder="Selecione um setor"></ComboboxInput>
              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.nome + item.unidade} value={item}>
                      {item.nome}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        )}
      />

      <Controller
        name="solicitante"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-8">
            <FieldLabel>Solicitante</FieldLabel>

            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={selectOptions?.solicitantes}
            >
              <ComboboxInput placeholder="Selecione o nome do solicitante"></ComboboxInput>

              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.nome} value={item}>
                      {item.nome}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        )}
      />

      <Separator className="col-span-full" />

      <Controller
        name="valor"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>Valor</FieldLabel>
            <MoneyInput {...field}></MoneyInput>
          </Field>
        )}
      />

      <Controller
        name="dataPagamento"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>Data de Pagamento</FieldLabel>
            <Input {...field} type="date"></Input>
          </Field>
        )}
      />

      <Controller
        name="metodoPagamento"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>Método de Pagamento</FieldLabel>
            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={selectOptions?.metodosPagamento}
            >
              <ComboboxInput></ComboboxInput>

              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>

                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.valor} value={item}>
                      {item.nome}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        )}
      />

      <Controller
        name="descricao"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-full">
            <FieldLabel>Descrição</FieldLabel>
            <Textarea {...field} className="resize-none h-24"></Textarea>
          </Field>
        )}
      />

      <div className="col-span-full flex justify-end gap-2">
        <Button onClick={onCancel} variant="outline">
          Cancelar
        </Button>

        <Button onClick={() => reset(emptyValues)} variant="secondary">
          Limpar
        </Button>

        <Button type="submit" className="w-32">
          Salvar
        </Button>
      </div>
    </form>
  );
}

export default PaymentRequestForm;
