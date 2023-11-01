import React from 'react'

const Product = ({product}) => {
    console.log("first", product)
    return (
        <div>

            <tr>
                {/* <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th> */}
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                            {/* product.img || */}
                                <img src={product.img ||  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlD_DPh0iHX8joVT2S7o63H4IwUhDLlooiXE53MY&s"} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{product.pName}</div>
                            <div className="text-sm opacity-50">{product._id}</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    )
}

export default Product