import React from 'react'

const UpdateProduct = () => {
  return (
    <div>
        <h2 className='text-center text-5xl text-orange-600 font-bold'>Update Product</h2>
       <form onSubmit={addProduct} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input name='productName' type="text" placeholder="Product Name" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="Product Price" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="text" name='productImg' placeholder="Product Image" className="input input-bordered"  />
        </div>

        

        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Product</button>
        </div>
        
      </form>
    </div>
  )
}

export default UpdateProduct