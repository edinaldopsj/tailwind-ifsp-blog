import Button from "../../components/Button";
import Wrapper from "../../components/layout/Wrapper";
import Title from "../../components/Title";

export default function Login() {
  return (
    <Wrapper>
      <main className="pt-32">
        <Title title="Tela de Login" />
        <form class="bg-grey-lightest px-48">
          <div class="mb-3">
            <input class="border w-full p-3" name="email" type="text" placeholder="E-Mail" />
          </div>
          <div class="mb-6">
            <input class="border w-full p-3" name="password" type="password" placeholder="**************" />
          </div>
          <div class="flex justify-between">
            <Button label="Registrar-se"></Button>
            <Button label="Esqueceu senha?"></Button>
          </div>
        </form>
      </main>
    </Wrapper>
  );
}
