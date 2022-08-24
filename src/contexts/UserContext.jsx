import React, { createContext } from "react";
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate()

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      try {
        setError(null);
        setLoading(true);

        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);

        if (!response.ok) throw new Error();
        await getUser(token);
      } catch (err) {
        userLogout()
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if(!tokenResponse.ok) throw new Error(`Erro: Usuário não cadastrado`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/my-account')
    } catch (err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
    
  }

  async function userLogout() {
    setData(null)
    setLogin(null)
    setError(null)
    setLoading(false)
    window.localStorage.removeItem('token') 
    navigate('/login')
  }

  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
