import React, { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://infinite-coast-95375.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return products
}

export default useProducts
