import * as React from 'react';
import { Link } from 'react-router-dom';
function ProductList({Products}) {
    return (
        <div className="grid grid-cols-4 md:p-2 text-xs">
            {Products.map((product,index) => (
                <div key={index} className='p-3'>
                    <Link to={`${product.imgid}`}><img src={`http://localhost:8000/image/${product.imgid}`} alt={product['name']} /></Link>
                    <div className='p-1 text-base'>
                        <p>{product['product'].productName}</p>
                        <p>INR : {product['product'].price}</p>
                        {/* <p>{product['sizes'].join(', ')}</p> */}
                    </div>
                </div>
            ))}

        </div>
    )
}
export default ProductList;