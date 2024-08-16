import { Link } from 'react-router-dom';

function ProductList({ Products }) {
    console.log(Products);

    if (!Products || Products.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div className="grid grid-cols-4 md:p-2 text-xs -ml-1">
            {Products.map((product) => (
                <div key={product.imgid} className='p-3'>
                    <Link to={`${product.imgid}`}>
                        <img
                            src={`http://localhost:8000/image/${product.imgid}`}
                            alt={product['name']}
                            className='hover:scale-y-105 hover:scale-105 ease-in-out transform transition duration-300 rounded-sm'
                        />
                    </Link>
                    <div className='Futura p-1 text-base items-center'>
                        <p className="m-0">
                            {product['product'].productName} {' - '}
                            <span className='font-bold'>
                                {product['product'].categoryName}
                            </span>
                        </p>
                        <p className="rating m-0 p-0">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <input
                                    key={value}
                                    type="radio"
                                    name={`rating-${product.imgid}`}
                                    className="mask mask-star-2 bg-yellow-400 scale-75 cursor-auto"
                                    checked={value === product['rating']}
                                    readOnly
                                />
                            ))}
                        </p>
                        <p className="m-0 ">
                            INR: {product['product'].price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
