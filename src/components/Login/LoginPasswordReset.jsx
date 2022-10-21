import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate("login");
      }
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  return (
    <section className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <Head title="Resetar a Senha" />
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginPasswordReset;
