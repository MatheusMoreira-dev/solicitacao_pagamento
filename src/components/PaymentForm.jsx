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
import { useForm } from "react-hook-form";

function PaymentForm({
  unidades,
  soliciantes,
  setores,
  prestadores,
  pagamentos,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6"
    >
      <Field className="col-span-3 relative">
        <FieldLabel>Unidade</FieldLabel>
        <Combobox
          items={unidades}
          itemToStringLabel={(unidade) => unidade.nome}
        >
          <ComboboxInput
            {...register("unidade", { required: "A unidade é obrigatória" })}
            placeholder="Selecione uma Unidade"
          ></ComboboxInput>
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

        {errors.unidade && <p>{errors.unidade.message}</p>}
      </Field>

      <Field className="col-span-4">
        <FieldLabel>Setor</FieldLabel>
        <Combobox items={setores} itemToStringLabel={(setor) => setor.nome}>
          <ComboboxInput
            {...register("setor", { required: "O setor é obrigatório" })}
            placeholder="Selecione um setor"
          ></ComboboxInput>
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

        {errors.setor && <p>{errors.setor.message}</p>}
      </Field>

      <Field className="col-span-5">
        <FieldLabel>Solicitante</FieldLabel>
        <Combobox
          items={soliciantes}
          itemToStringLabel={(solicitante) => solicitante.nome}
        >
          <ComboboxInput
            {...register("solicitante", {
              required: "O nome do solicitante é obrigatório",
            })}
            placeholder="Selecione o nome do solicitante"
          ></ComboboxInput>
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

        {errors.soliciante && <p>{errors.soliciante.message}</p>}
      </Field>

      <Field className="col-span-full">
        <FieldLabel>Prestador</FieldLabel>
        <Combobox
          items={prestadores}
          itemToStringLabel={(prestadores) =>
            prestadores.razaoSocial + " - " + prestadores.nomeFantasia
          }
        >
          <ComboboxInput
            {...register("prestador", { required: "Campo obrigatório!" })}
            placeholder="Selecione o nome do solicitante"
          ></ComboboxInput>
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

        {errors.prestador && <p>{errors.prestador.message}</p>}
      </Field>

      <Field className="col-span-4">
        <FieldLabel>Valor</FieldLabel>
        <MoneyInput
          {...register("valor", { required: "Campo obrigatório!" })}
        ></MoneyInput>

        {errors.valor && <p>{errors.valor.message}</p>}
      </Field>

      <Field className="col-span-4">
        <FieldLabel>Data de Pagamento</FieldLabel>
        <Input type="date"></Input>
      </Field>

      <Field className="col-span-4">
        <FieldLabel>Método de Pagamento</FieldLabel>
        <Combobox
          items={pagamentos}
          itemToStringLabel={(pagamento) => pagamento.nome}
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

      <Field className="col-span-full">
        <FieldLabel htmlFor="descricao">Descrição</FieldLabel>
        <Textarea
          id="descricao"
          name="descricao"
          className="resize-none h-24"
        ></Textarea>
      </Field>

      <div className="col-span-full flex justify-end gap-2">
        <Button variant="outline">Cancelar</Button>
        <Button variant="secondary">Limpar</Button>
        <Button type="submit" className="w-32">
          Salvar
        </Button>
      </div>
    </form>
  );
}

export default PaymentForm;
