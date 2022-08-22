import React from 'react'

function PhotoPost() { 
  const [token, setToken] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [idade, setIdade] = React.useState('')
  const [peso, setPeso] = React.useState('')
  const [img, setImg] = React.useState('')
  

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('img', img)
    formData.append('nome', nome)
    formData.append('idade', idade)
    formData.append('peso', peso)

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',  
      headers: {
        Authorization: 'Bearer' + token
      },
      body: formData
    })
    .then(response => {
        console.log(response.json)
        return response.json()
    }) 
    .then(json => {
        console.log(json) 
        return json
    })  
  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <div> 
        <input type="text" value={token} placeholder="Token" onChange={({target}) => setToken(target.value)} /> 
        <input type="text" value={nome} placeholder="Nome" onChange={({target}) => setNome(target.value)} /> 
        <input type="text" value={idade} placeholder="Idade" onChange={({target}) => setIdade(target.value)} /> 
        <input type="text" value={peso} placeholder="Peso" onChange={({target}) => setPeso(target.value)} /> 
        <input type="file" onChange={(event) => setImg(event.target.files[0])} />  
        <button>Sign in</button>
      </div>
    </form>
  )
}

export default PhotoPost;