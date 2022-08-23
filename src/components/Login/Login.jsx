import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from '../Login/LoginForm'
import LoginCreate from '../Login/LoginCreate'
import LoginPasswordLost from '../Login/LoginPasswordLost'
import LoginPasswordReset from '../Login/LoginPasswordReset'

function Login() {
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