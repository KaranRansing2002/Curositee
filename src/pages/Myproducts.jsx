import ProductTable from '@/components/custom/ProductTable';
import { getProductsByVendor } from '@/services/product';
import React, { useEffect, useState } from 'react'

const Myproducts = ({user,setPage}) => {

  const [products,setProducts] = useState([]);

  const [del,setDel] = useState(1);

  useEffect(()=>{
    const func=async()=>{
      const ps = await getProductsByVendor(user.uid);
      setProducts(ps);
      console.log(ps);
      
    }
    func()
  },[del])

  return (
    <div className='lg:px-4'>
      <ProductTable setPage={setPage} products={products} setDel={setDel}/>
    </div>
  )
}

export default Myproducts
