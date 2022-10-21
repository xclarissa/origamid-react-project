import React from "react";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/useForm";
import { PHOTO_POST } from "../../api";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  // const password = useForm('password');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PHOTO_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);

    // const { token } = await response.json()
    // console.log(token)
    // username.setValue('')
    // email.setValue('')
    // password.setValue('')
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <Head title="Crie sua conta" />
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
