import { UserContext } from '@/App';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ Products, isWishlist, setWishlist }) => {
  const [productList, setProductList] = useState(Products);
  const gridCols = productList.length < 4 ? 'grid-cols-8' : 'grid-cols-4';

  const { loggedUser } = useContext(UserContext);
  const handleRemove = (imgid) => {
    axios.delete(`http://localhost:8080/delete/${imgid}?imgid=${imgid}&uid=${loggedUser.uid}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}` // Replace with actual token
      }
    })
      .then(response => {
        console.log('Item removed from wishlist:', response.data);
        const updatedList = productList.filter(product => product.imgid !== imgid);
        setProductList(updatedList);
        setWishlist(prevList => prevList.filter(product => product.imgid !== imgid));
      })
      .catch(error => {
        console.error('Error removing item from wishlist:', error);
      });
  };

  return (
    <div className={`grid ${gridCols} md:p-2 text-xs -ml-1 h-screen overflow-auto`}>
      {productList.map((product, index) => (
        <div key={index} className='p-3'>
          <Link to={`${product.imgid}`}>
            <img
              src={`http://localhost:8000/image/${product.imgid}`}
              alt={product.title}
              className='hover:scale-y-105 hover:scale-105 ease-in-out transform transition duration-300 rounded-sm'
            />
          </Link>
          <div className='Futura p-1 text-base items-center'>
            <p className="m-0">
              {product.title}
              {product.category &&
                <span> {' - '} <span className='font-bold'>{product.category}</span></span>
              }
            </p>
            <p className="rating m-0 p-0 ">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-yellow-400 scale-75 cursor-auto"
                  checked={value === product.rating}
                  readOnly
                />
              ))}
            </p>
            <p className="m-0 -mt-2">
              INR: {product.price}
            </p>
            {isWishlist && (
              <button
                className="btn btn-outline btn-warning"
                onClick={() => handleRemove(product.imgid)}
              >
                Remove from Wishlist
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
