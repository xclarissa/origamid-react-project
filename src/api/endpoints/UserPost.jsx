import React from 'react'

function UserPost() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          username,
          email,
          password
        }
      )
    })
    .then(response => console.log(response.json)) 
    .then(json => console.log(json)) 
    console.log({username, email, password})
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button>Sign up</button>
      </div>
    </form>
  )
}

export default UserPost;