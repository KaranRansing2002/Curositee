import { CartContext, UserContext } from '@/App';
import config from '@/config';
import { placeOrder } from '@/services/order';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import BagProd from './BagProd';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const Bag = ({ size, data, bagImage }) => {

    console.log(data);

    const { loggedUser } = useContext(UserContext);
    const { setCart, cart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

    const handleCart = () => {
        setCart(p => {
            const x = [...p];
            let ok = false;
            for (let i = 0; i < x.length; i++) {
                if (x[i].image == bagImage) {
                    ok = true;
                    break;
                }
            }
            if (!ok) {
                x.push({ image: bagImage, ...data["prod"] });
            }
            return x;
        })
    }

    const handleCheckout = async () => {
        setLoading(true)
        //console.log(cart);
        const token = sessionStorage.getItem('token');
        const resp = await axios.get(`${config.url}/address?uid=${loggedUser.uid}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if(resp.data.length==0){
            toast("please add ur address!");
            return;
        }

        const stripe = await loadStripe('pk_test_51K96NiSE0mSwz2G7KtxO93AIV6pTsGr3r4Ay1HB051ljJl14Abr9dvNZ0gUIjmLAAjjeMIWusmzx8kRDPFAYKzvb00RzkYicMY');

        const body = {
            products: cart
        }

        const headers = {
            "Content-Type": "application/json"
        }

        const res = await axios.post("https://curiousitee-payment-stripe-server.vercel.app/checkout", body,{ headers, withCredentials: true } );

        const session = await res.data;

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })


        if (result.error) {
            toast.error("payement failed!")
        }

        else{
            const aid = resp.data[0].aid;
            cart.forEach(async (ord) => {
                const order = {
                    quantity: ord.qty,
                    status: false,
                    addressId: aid,
                    productVarientId: ord.image,
                    userId: loggedUser.uid
                }
                const res = await placeOrder(order);
                toast.success("order placed!")
            });
        }

        setLoading(false);
    }

    return (
        <div className="drawer drawer-end relative z-20">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content" onClick={() => handleCart()} >
                <label htmlFor="my-drawer" disabled={size == undefined} className="btn w-full bg-black text-white hover:skeleton hover:bg-black">
                    <img className="h-4 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFSdPgCHsGunAivcnS9OvmlVRLpHGqeDb6w&usqp=CAU" alt="Bag icon" />
                    ADD TO CART
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white text-base-content min-h-full w-80 md:w-1/2 lg:w-[425px] p-6 flex flex-col">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-2xl Futura font-semibold p-2">CART</h1>
                        <label htmlFor="my-drawer" className="mb-2 text-2xl cursor-pointer text-white bg-black p-1 bg-opacity-50 hover:bg-opacity-75 rounded-full text-[16px] w-8 h-8 flex items-center justify-center">X</label>
                    </div>
                    <hr />

                    <div className='flex flex-col gap-4 flex-1  border overflow-y-scroll max-h-96 p-2'>
                        {
                            cart.map((data, ind) => (
                                <BagProd data={data} />
                            ))
                        }
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">SUBTOTAL</span>
                        <span className="font-semibold">{cart.reduce((accumulator, item) => { return accumulator + item.price * item.qty }, 0)}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-6">Shipping, taxes, and discount codes calculated at checkout.</p>

                    <button className="w-full bg-black text-white py-3 uppercase font-semibold mt-auto text-center " onClick={handleCheckout} disabled={loading}>{loading ? "Processing..." : "Proceed to checkout"}</button>
                </div>
            </div>
        </div>
    )
}

export default Bag