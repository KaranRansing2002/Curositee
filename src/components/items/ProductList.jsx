import * as React from 'react';
function ProductList({Products}) {
    return (
        <div className="grid grid-cols-4 md:p-2 text-xs">
            {Products.map((product,index) => (
                <div key={index} className='p-3'>
                    <a><img src={product['src']} alt={product['name']} /></a>
                    <div className='p-1 text-base'>
                        <p>{product['name']}</p>
                        <p>INR : {product['price']}</p>
                        <p>{product['sizes'].join(', ')}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default ProductList;