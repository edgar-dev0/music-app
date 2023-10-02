import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  const url = 'https://playlist-share-dev.fl0.io/api/auth/login';
  return (
    <div>
      <h1>Gift Music</h1>
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/auth/login' element={<LoginPage /> } />
        <Route path='/auth/register' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
