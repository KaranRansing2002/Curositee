import React from 'react'
import { prods } from '@/data/proddData';
const ProductItem = ({index}) => {
    const data = prods[index];
    return (
        <div className="flex mb-6 mt-4">
            <img src={data.images[0]} alt="Orange Polo T-Shirt" className="w-24 h-32 object-cover mr-4" />
            <div>
                <h2 className="font-semibold">{data.title}</h2>
                <p>Color: {data.color}</p>
                <p>Size: {size}</p>
                <div className="flex items-center mt-2">
                    <button className="border px-2">-</button>
                    <span className="mx-2">1</span>
                    <button className="border px-2">+</button>
                    <span className="ml-auto">{data.price}</span>
                </div>
            </div>
        </div>

    )
}

export default ProductItem
