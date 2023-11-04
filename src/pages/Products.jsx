import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
  const [allProducts, setAllProducts] = useState()
  // const allProducts = useLoaderData();
  // console.log("this is products list",allProducts)

  useEffect(()=>{
    axios.get('http://localhost:5000/products',{ withCredentials:true })
    .then(res =>{
      setAllProducts(res.data)
    })

  },[])

  return (
    <div>
      <h2>Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 text-center'>
        {
          allProducts && allProducts.map((item)=>(
            <div className='border-2 border-red-500 p-5 bg-red-100'>
              <img className='w-10 h-10 mx-auto' src={item.img} alt="" />
              <h2>{item.pName}</h2>
              <p>{item.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products