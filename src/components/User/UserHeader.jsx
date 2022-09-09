import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function UserHeader() {
  const [title, setTitle] = React.useState('')
  const location = useLocation() //alterar titulo de acordo com a localização

  useEffect(() => {
    const {pathname} = location;

    switch(pathname) { 
      case '/my-account/stats':
        setTitle('Estatísticas')
      break
      case '/my-account/post':
        setTitle('Poste Sua Foto')
      break
      default:
        setTitle('Minha Conta')
    } 

  }, [location])

  console.log(location)

  return (
    <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader