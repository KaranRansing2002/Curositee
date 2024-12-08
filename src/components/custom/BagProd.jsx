import { CartContext } from '@/App';
import { ArrowBigDownDash, ArrowBigUp, ArrowBigUpDash, Delete, IndentDecrease, IndentDecreaseIcon, SidebarClose } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const BagProd = ({data}) => {
    console.log(data);
    const [qty,setQty] = useState(1);
    const {setCart} = useContext(CartContext);
    
    useEffect(()=>{
        setCart(p=>{
            const x=[...p];
            for(let i=0;i<x.length;i++){
                if(x[i].image==data.image){
                    x[i].qty=qty;
                    data.qty=qty;
                }
            }
            return x;
        })
    },[qty])

    const handleRemoveItem=()=>{
        setCart(p=>{
            const x=[];
            for(let i=0;i<p.length;i++){
                if(p[i].image==data.image){
                    continue;
                }
                x.push(p[i]);
            }
            return x;
        }) 
    }


  return (
    <div className='p-2 flex gap-2 border cursor-pointer border-black  transition-all ease-linear'>
      <div className='h-20 w-24 bg-cover rounded' style={{backgroundImage:`url(https://image-server-ebon.vercel.app/image/${data.image})`}}></div>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between w-full '>
            <Link to={`/product/${data.image}`} className='font-semibold text-lg underline flex-1 pt-2'>{data.productName.toUpperCase()}</Link>
            <Delete onClick={handleRemoveItem}/>
        </div>
        <div className='flex items-center mt-auto'>
            <h2 className='font-semibold text-lg  flex-1 text-left'><span className='text-green-500'>{data.price}</span> INR</h2>
            <div className='flex gap-1 items-center'>
                <Button size="sm" className=' border rounded'>QTY - {qty}</Button>
                <ArrowBigUpDash onClick={()=>setQty(p=>p+1)}/>
                <ArrowBigDownDash onClick={()=>setQty(p=>Math.max(p-1,1))}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BagProd
