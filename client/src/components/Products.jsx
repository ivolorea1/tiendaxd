import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get('http://localhost:5000/api/products')
      setProducts(result.data)
    }
    getProducts()
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <Link key={i} to={`/${i}`} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={`producto${product.title}`}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products