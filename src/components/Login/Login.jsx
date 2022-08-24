import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../Login/LoginForm'
import LoginCreate from '../Login/LoginCreate'
import LoginPasswordLost from '../Login/LoginPasswordLost'
import LoginPasswordReset from '../Login/LoginPasswordReset'
import { UserContext } from '../../contexts/UserContext'

function Login() {
  const { login } = React.useContext(UserContext) 

  if(login === true) return <Navigate to='/my-account' />
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='perdeu' element={<LoginPasswordLost />} />
        <Route path='resetar' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login