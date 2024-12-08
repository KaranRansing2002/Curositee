import Hero from '@/components/custom/Hero'
import { Button } from '@/components/ui/button'
//import { prods } from '@/data/proddData'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'


const Home = () => {

    const [TrendingProducts,setTrendingProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/orders/trending')
            .then(response => {
               // console.log(response.data);
                setTrendingProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className='p-2'>
            <Hero />
            <div className='flex gap-4 justify-center'>
                <div className='p-3 hover:cursor-pointer rounded-xl border border-black text-white bg-black'>NEW DROPS</div>
                <div className='p-3 hover:cursor-pointer hover:border-black border rounded-xl'>MOST TRENDING</div>
            </div>

            <Catgeories />

            <div className='text-center text-xl font-bold underline-offset-1'>TRENDING NOW</div>

            <div className='flex justify-evenly flex-wrap gap-4 p-8 '>
                {
                    TrendingProducts.map((prod,index) => (
                        <ProdCard key={prod.imgid} ind={prod.imgid} data={prod} />
                    ))
                }
            </div>
            <div>
                <Link to='/product'><Button variant="secondary" className=' border border-slate-600 '>View All</Button></Link>
            </div>

        </div>
    )
}

const Catgeories = () => {
    const images = [
        { name: "BREEZY LINEN", image: "https://www.snitch.co.in/cdn/shop/files/Linen-edit.jpg?v=1716814203&width=1080" },
        { name: "POLOS", image: "https://www.snitch.co.in/cdn/shop/files/POLO.jpg?v=1716814203&width=540" },
        { name: "T-SHIRTS", image: "https://www.snitch.co.in/cdn/shop/files/Tees_new_1.jpg?v=1718086208&width=360" },
        { name: "FUNKY SHIRTS", image: "https://www.snitch.co.in/cdn/shop/files/Crochet-Shirts.jpg?v=1716814202&width=360" },

    ]
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-8'>
            {images.map((image, index) => (
                <div className='rounded-2xl flex relative cursor-pointer' key={index}>
                    <img src={image.image} className='rounded-2xl hover:scale-[1.04] hover:brightness-75 transition-all ease-linear object-cover' />
                    <span className='absolute bottom-8 left-4 font-bold text-white '>{image.name}</span>
                </div>
            ))}
        </div>
    )
}


const ProdCard = ({ data, ind }) => {
    //const [image, setImage] = useState(data.images[0]);
    if(!ind) return;
    // console.log(console.log(`Image URL: https://image-server-ebon.vercel.app/${ind}`));
    return (
        <Link to={`/product/${ind}`}>
            <div className='flex flex-col cursor-pointer p-2 shadow-2xl rounded border border-slate-200' >
                <img src={`https://image-server-ebon.vercel.app/image/${ind}`} className='hover:brightness-75 rounded-xl  transition-all flex ease-linear hover:scale-[] sm:h-60 ' onMouseEnter={() => setImage(data.images.length > 1 ? data.images[1] : image)} onMouseLeave={() => setImage(data.images[0])} />
                {/* <h3 className='Futura text-nowrap overflow-hidden text-[16px] text-slate-800 text-left'>{data.title[0] + data.title.substring(1).toLowerCase()}</h3> */}
                {/* <p className='Twentieth-Century text-left text-sm text-slate-600'>INR : {data.price}</p> */}
            </div>
        </Link>
    )
}

export default Home
