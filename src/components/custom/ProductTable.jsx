import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { deleteProduct, updateStock } from "@/services/product";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Input } from "../ui/input";
  

const ProductTable = ({ products,setPage,setDel }) => {

    const [loading,setLoading] = useState(false);

    const handleDelete=async(id)=>{
        setLoading(true);
        const resp = await deleteProduct(id);
        setLoading(false);
        setDel(d=>(d+1))
    }

    const handleUpdate=async(id,stock)=>{
        setLoading(true);
        const resp = await updateStock(id,stock);
        setLoading(false);
        setDel(d=>(d+1))
    }

    const [amt,setAmt] = useState(0);

    return (
        <div className="p-4 h-screen">

            <div className="py-2 px-4 text-left flex items-center">
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold mb-4">Product List</h1>
                </div>
                <div className="ml-auto">
                    <button
                        className="select-none rounded-lg bg-green-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=>setPage(1)}
                    >
                        Add-Product
                    </button>
                </div>
            </div>

            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Color</th>
                        <th className="py-2 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Stock</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .map((product, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b ">
                                    <div className="grid place-items-center">
                                        <img className="h-14" src={`https://image-server-ebon.vercel.app/${product.imgid}`}/>
                                        <Link to={`/product/${product.imgid}`} className="text-sm underline text-blue-400">{product.imgid}</Link>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">{product.product.productName}</td>
                                <td className="py-2 px-4 border-b">{product.product.price}</td>
                                <td className="py-2 px-4 border-b">{product.color}</td>
                                <td className="py-2 px-4 border-b">{product.product.categoryName}</td>
                                <td className="py-2 px-4 border-b">{product.product.productDesc}</td>
                                <td className="py-2 px-4 border-b">
                                    {product.stock > 0 ? (
                                        product.stock
                                    ) : (
                                        <span style={{ color: 'red' }}>Out of Stock</span>
                                    )}
                                </td>
                                <td className="py-2 px-4 grid gap-2">
                                    <Button disabled={loading} size="sm" variant="destructive" onClick={()=>handleDelete(product.imgid)} >Delete</Button>
                                    <Popover>
                                        <Button className='bg-green-600' size="sm"><PopoverTrigger>update</PopoverTrigger></Button>
                                        <PopoverContent className='flex gap-2 items-center'>
                                            <Input  onChange={e=>setAmt(e.target.value)} type="number" placeholder="amount"/>
                                            <Button onClick={()=>handleUpdate(product.imgid,amt)}>Increase</Button>
                                        </PopoverContent>
                                    </Popover>

                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
