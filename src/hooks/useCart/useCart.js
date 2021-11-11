import React, { useState } from 'react'
import useAuth from '../useAuth'

const useCart = () => {
  const { products, AllContext } = useAuth()
  const { user } = AllContext

  const handleAddToCart = (index) => {
    const data = products[index]
    data.email = user?.email
    delete data._id
    fetch('http://localhost:5000/addItem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return handleAddToCart
}

export default useCart
