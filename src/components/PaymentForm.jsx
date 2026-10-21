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

const unidades = [
  { nome: "SEDE", cnpj: "1" },
  { nome: "HUC", cnpj: "2" },
  { nome: "NAS", cnpj: "3" },
  { nome: "LAGOA", cnpj: "4" },
];

const soliciantes = [
  { nome: "Matheus Moreira Marcelino", ramal: 2018, setor: "Marketing" },
];

const setores = [{ nome: "Marketing", unidade: "SEDE", ramal: 2018 }];

const prestadores = [
  {
    nomeFantasia: "BSG",
    razaoSocial: "Sublime",
    cnpj: "111",
    metodosPagamento: {},
  },
];

const pagamentos = [
  { nome: "Boleto", valor: "boleto" },
  { nome: "Cheque", valor: "cheque" },
  { nome: "Cartão Corporativo", valor: "cartao" },
  { banco: "Banco do Brasil", agencia: "10223-10" },
];

function PaymentForm() {
  return (
    <form className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6">
      <Field className="col-span-3">
        <FieldLabel>Unidade</FieldLabel>
        <Combobox
          items={unidades}
          itemToStringLabel={(unidade) => unidade.nome}
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

      <Field className="col-span-4">
        <FieldLabel>Setor</FieldLabel>
        <Combobox items={setores} itemToStringLabel={(setor) => setor.nome}>
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

      <Field className="col-span-5">
        <FieldLabel>Solicitante</FieldLabel>
        <Combobox
          items={soliciantes}
          itemToStringLabel={(solicitante) => solicitante.nome}
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

      <Field className="col-span-full">
        <FieldLabel>Prestador</FieldLabel>
        <Combobox
          items={prestadores}
          itemToStringLabel={(prestadores) =>
            prestadores.razaoSocial + " - " + prestadores.nomeFantasia
          }
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

      <Field className="col-span-4">
        <FieldLabel>Valor</FieldLabel>
        <MoneyInput></MoneyInput>
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
    </form>
  );
}

export default PaymentForm;
