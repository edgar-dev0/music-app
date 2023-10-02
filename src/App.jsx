import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = { token, username, email }
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
    <div>
      <h1>Gift Music</h1>
      <Routes>
        <Route path='/auth/login' element={<LoginPage /> } />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<HomePage/> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
