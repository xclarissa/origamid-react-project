import React from 'react'

function TokenPost() { 
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          username,
          password
        }
      )
    })
    .then(response => {
        console.log(response.json)
        return response
    }) 
    .then(json => {
        console.log(json)
        setToken(json.token)
        return json
    }) 
    console.log({username, password})
  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <div> 
        <input type="text" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} /> 
        <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button>Sign in</button>
        <p style={{wordBreak: 'break-all'}}>{token}</p>
      </div>
    </form>
  )
}

export default TokenPost;