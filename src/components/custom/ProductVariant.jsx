import React from 'react'
import FileUploader from './FileUploader'
import { Input } from '../ui/input'

const ProductVariant = ({prodV,setProdV}) => {
  return (
    <div>
        <div className='grid gap-2'>
            <FileUploader prodV={prodV} setProdV={setProdV} />   
            <Input placeholder="color" value={prodV.color} onChange={(e)=>setProdV(p=>({...p,color:e.target.value}))}/>
            <Input placeholder="stock" type="number" value={prodV.stock} onChange={(e)=>setProdV(p=>({...p,stock:e.target.value}))} />
        </div>
    </div>
  )
}

export default ProductVariant
