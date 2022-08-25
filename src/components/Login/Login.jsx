import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import LoginCreate from "../Login/LoginCreate";
import LoginPasswordLost from "../Login/LoginPasswordLost";
import LoginPasswordReset from "../Login/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/my-account" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<LoginCreate />} />
          <Route path="lost-password" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
