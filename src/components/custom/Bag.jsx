import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { SimilarProd, YouMayLike } from './ProdImage';
import { prods } from '@/data/proddData';
import ProductItem from './ProductItem';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const Bag = ({ size }) => {
    const query = useQuery();
    const { index } = useParams();
    const data = prods[index];

    console.log(size);

    return (
        <div className="drawer drawer-end relative z-20">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content"  >
                <label htmlFor="my-drawer" disabled={size == undefined} className="btn w-full bg-black text-white hover:skeleton hover:bg-black">
                    <img className="h-4 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFSdPgCHsGunAivcnS9OvmlVRLpHGqeDb6w&usqp=CAU" alt="Bag icon" />
                    ADD TO BAG
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white text-base-content min-h-full w-80 md:w-1/2 lg:w-[425px] p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl Futura font-semibold p-2">BAG</h1>
                        <label htmlFor="my-drawer" className="mb-2 text-2xl cursor-pointer text-white bg-black p-1 bg-opacity-50 hover:bg-opacity-75 rounded-full text-[16px] w-8 h-8 flex items-center justify-center">X</label>
                    </div>
                    <hr />

                    <ProductItem/>
                    <h3 className="font-semibold mb-4">YOU MAY ALSO LIKE</h3>
                    <div className='h-[]250px'>

                        <div ><SimilarProd cName={"w-24 h-32 object-cover"} prods={prods} imageSize="250px" /></div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-6">
                        {/* Your product grid items */}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">SUBTOTAL</span>
                        <span className="font-semibold">{data.price}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-6">Shipping, taxes, and discount codes calculated at checkout.</p>

                    <button className="w-full bg-black text-white py-3 uppercase font-semibold mt-auto">Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Bag