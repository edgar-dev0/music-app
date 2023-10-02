import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const credentials = useSelector(store => store.credentials)
  if (credentials != null) {
    return <Outlet />
  } else {
    return <Navigate to='/auth/login' />
  }
}

export default ProtectedRoutes
