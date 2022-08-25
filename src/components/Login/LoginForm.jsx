import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../contexts/UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Forms/Button.module.css";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.lost} to="/login/lost-password">
        Esqueceu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/signup">
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
