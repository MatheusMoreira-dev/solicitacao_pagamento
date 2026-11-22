import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { useAuth } from "@/hooks/useAuth";
import { EyeClosedIcon, EyeOffIcon } from "lucide-react";
import { BsGoogle } from "react-icons/bs";

function Login() {
  const { loginWithEmail } = useAuth();

  async function handleLoginWithEmail(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await loginWithEmail(data.email, data.password);
  }

  return (
    <main className="size-full">
      <Card size="lg" className="my-12 mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
        </CardHeader>

        <CardContent>
          <form
            id="loginForm"
            className="grid gap-6"
            onSubmit={handleLoginWithEmail}
          >
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                placeholder="exemplo@gmail.com"
                name="email"
              />
            </Field>

            <Field>
              <FieldLabel>Senha</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  type="password"
                  placeholder="Insira a sua senha..."
                  name="password"
                />
                <InputGroupAddon align="inline-end">
                  <EyeOffIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 justify-center">
          <Button size="lg" className="w-full" type="submit" form="loginForm">
            Entrar
          </Button>

          <p className="text-muted-foreground">ou</p>

          <div className="flex w-full flex-col justify-center">
            <Button size="lg" className="w-full" variant="outline">
              <BsGoogle />
              Entrar com Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Login;
