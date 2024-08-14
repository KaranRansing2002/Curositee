import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import Myproducts from './Myproducts';

const Vendor = () => {
    const [page,setPage] = useState(0);
  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-2 p-4 sm:px-2  lg:px-96'>
        <Button size='sm' className={page==0 ? 'text-[10px] sm:text-sm px-2' : 'text-[10px] sm:text-sm px-2 bg-yellow-400'} onClick={()=>setPage(0)}  >dashboard</Button>
        <Button size='sm' className={page==1 ? 'text-[10px] sm:text-sm px-2' : 'text-[10px] sm:text-sm px-2 bg-yellow-400'} onClick={()=>setPage(1)}  >add-product</Button>
        <Button size='sm' className={page==2 ? 'text-[10px] sm:text-sm px-2' : 'text-[10px] sm:text-sm px-2 bg-yellow-400'} onClick={()=>setPage(2)}  >my-products</Button>
      </div>
      {
        page==0 ? <Dashboard/> : page==1 ? <AddProduct/> : <Myproducts/>
      }
    </div>
  )
}

export default Vendor
