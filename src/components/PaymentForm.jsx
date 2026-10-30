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

function PaymentForm({
  selectOptions = {},
  initialData = {},
  onSubmit,
  onCancel,
}) {
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

  const { handleSubmit, control, reset } = useForm({
    defaultValues: emptyValues,
  });

  // Adiciona os dados iniciais nos campos do form
  useEffect(() => {
    reset({ ...emptyValues, ...initialData });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6"
    >
      <Controller
        name="unidade"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-3 relative">
            <FieldLabel>Unidade</FieldLabel>
            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={selectOptions?.unidades || []}
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
          <Field className="col-span-5">
            <FieldLabel>Solicitante</FieldLabel>

            <Combobox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              itemToStringLabel={(item) => item?.nome ?? ""}
              items={selectOptions?.soliciantes}
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
              itemToStringLabel={(prestadores) =>
                prestadores.razaoSocial + " - " + prestadores.nomeFantasia
              }
              items={selectOptions?.prestadores}
            >
              <ComboboxInput placeholder="Selecione o nome do solicitante"></ComboboxInput>

              <ComboboxContent>
                <ComboboxEmpty>Item não encontrado</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.cnpj} value={item}>
                      {item.razaoSocial + " - " + item.nomeFantasia}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        )}
      />

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

      <div className="col-span-full flex justify-center gap-2">
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

export default PaymentForm;
