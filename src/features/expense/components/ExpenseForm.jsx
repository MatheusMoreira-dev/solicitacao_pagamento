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
import { useServicesProviders } from "@/features/serviceProviders/hooks/useServiceProviders";

const emptyValues = {
  unidade: null,
  prestador: null,
  valorTotal: "",
  dataPrazo: "",
  descricao: "",
};

const unidades = [
  { nome: "SEDE", cnpj: "1" },
  { nome: "HUC", cnpj: "2" },
  { nome: "NAS", cnpj: "3" },
  { nome: "LAGOA", cnpj: "4" },
];

function ExpenseForm({ initialData = emptyValues, onSubmit, onCancel }) {
  const { servicesProviders } = useServicesProviders();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: emptyValues,
  });

  // Adiciona os dados iniciais nos campos do form
  useEffect(() => {
    const payload = { ...emptyValues, ...initialData };

    reset(payload);
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6"
    >
      <Controller
        name="prestador"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-full">
            <FieldLabel>Prestador</FieldLabel>
            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) =>
                `${item.razaoSocial} - ${item.nomeFantasia ?? ""}`
              }
              items={servicesProviders}
            >
              <ComboboxInput placeholder="Selecione o nome do solicitante"></ComboboxInput>

              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.cnpj} value={item}>
                      {item.nomeFantasia
                        ? `${item.razaoSocial} - ${item.nomeFantasia}`
                        : item.razaoSocial}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        )}
      />

      <Controller
        name="unidade"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4 relative">
            <FieldLabel>Unidade</FieldLabel>
            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={unidades}
            >
              <ComboboxInput placeholder="Selecione uma Unidade"></ComboboxInput>
              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.cnpj} value={item}>
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
        name="valorTotal"
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
        name="dataPrazo"
        rules={{ required: false, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>Prazo</FieldLabel>
            <Input {...field} type="date"></Input>
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

export default ExpenseForm;
