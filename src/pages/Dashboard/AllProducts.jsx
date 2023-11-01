import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product'

const AllProducts = () => {
  const products = useLoaderData()
  console.log("product from all poducts", products)
  return (
    <div>
      <div>
        <div className="">
          <table className="table">
            <thead>
              <tr>
                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                products && products.map((product, inx) => (
                  <Product key={inx} product={product} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllProducts