import React from 'react'
import { Button } from '../ui/button'

const ProdCard = ({prod}) => {
  return (
    <div className='p-2 flex gap-2 rounded border border-black hover:scale-[1.02] transition-all ease-linear'>
        <div className='h-20 w-20 bg-cover' style={{backgroundImage : `url(https://image-server-ebon.vercel.app/image/${prod.productDto.imgid})`}}></div>
        <div className='flex flex-col px-4 justify-between gap-1'>
            <Button>Title - {prod.productDto.product.productName}</Button>
            <Button>INR -{prod.productDto.product.price}</Button>
        </div>
    </div>
  )
}

export default ProdCard
