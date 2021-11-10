import React, { createContext } from 'react'
import useProducts from '../../hooks/useProducts'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const products = useProducts()
  const data = { products }
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
