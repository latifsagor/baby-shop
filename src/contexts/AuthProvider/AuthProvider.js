import React, { createContext } from 'react'
import useCart from '../../hooks/useCart/useCart'
import useFirebase from '../../hooks/useFirebase'
import useProducts from '../../hooks/useProducts'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const AllContext = useFirebase()
  const products = useProducts()
  const data = { AllContext, products }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
