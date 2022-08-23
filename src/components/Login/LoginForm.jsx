import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'

function LoginForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log({username, password})
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    .then(response => {
      console.log( response )
      return response.json()
    })
    .then((json) => {
      console.log(json)
    })
     
  }

  return (
    <section>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" name="username" type="text" value={username} onChange={({target}) => setUsername(target.value)} />  
          <Input label="Senha" name="password" type="password" value={password} onChange={({target}) => setPassword(target.value)} />  
          <Button disabled>Entrar</Button>
        </form> 
        <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm;