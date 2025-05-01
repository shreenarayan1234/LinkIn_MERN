import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { userDataContext } from '../context/UserContext'

const App = () => {
  let {userData} = useContext(userDataContext);
  return (
    <Routes>
      <Route path='/' element={userData?<Home/>:<Navigate to="/login"/>}/>
      <Route path='/signup' element={userData?<Navigate to="/"/>:<SignUp/>}/>
      <Route path='/login' element={userData?<Navigate to="/"/>:<Login/>}/>
    </Routes>
  )
}

export default App