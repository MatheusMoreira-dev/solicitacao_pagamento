import { Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const emptyValues = {
  razaoSocial: "",
  nomeFantasia: "",
  cnpj: "",
};

function ServiceProviderForm({
  initialData = emptyValues,
  onSubmit,
  onCancel,
}) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: emptyValues,
  });
  const [loading, setLoading] = useState(false);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Adiciona os dados iniciais nos campos do form
  useEffect(() => {
    const payload = { ...emptyValues, ...initialData };
    reset(payload);
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        setLoading(true);

        try {
          await onSubmit(data);
          await sleep(3000);
        } finally {
          setLoading(false);
        }
      })}
      className="w-full min-w-0 grid grid-cols-12 gap-4 gap-y-6"
    >
      <Controller
        name="razaoSocial"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-full">
            <FieldLabel>Razão Social</FieldLabel>
            <Input {...field} />
          </Field>
        )}
      />

      <Controller
        name="nomeFantasia"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-8">
            <FieldLabel>Nome Fantasia</FieldLabel>
            <Input {...field} />
          </Field>
        )}
      />

      <Controller
        name="cnpj"
        rules={{ required: true, validate: () => {} }}
        control={control}
        render={({ field, fieldState }) => (
          <Field className="col-span-4">
            <FieldLabel>CNPJ/CPF</FieldLabel>
            <Input {...field} />
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
          {loading && <Spinner></Spinner>}
          Salvar
        </Button>
      </div>
    </form>
  );
}

export default ServiceProviderForm;
