import React, { createContext } from 'react'
import useFirebase from '../../hooks/useFirebase'
import useProducts from '../../hooks/useProducts'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const products = useProducts()
  const AllContext = useFirebase()
  const data = { AllContext, products }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
