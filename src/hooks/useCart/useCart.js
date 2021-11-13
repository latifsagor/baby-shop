import React from 'react'
import useAuth from '../useAuth'

const useCart = () => {
  const { products, AllContext } = useAuth()
  const { user } = AllContext

  const handleAddToCart = (index) => {
    const data = products[index]
    data.email = user?.email
    delete data._id
    fetch('https://infinite-coast-95375.herokuapp.com/addItem', {
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
