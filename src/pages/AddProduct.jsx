import { UserContext } from '@/App'
import FileUploader from '@/components/custom/FileUploader'
import ProductVariant from '@/components/custom/ProductVariant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addproduct } from '@/services/product'
import axios from 'axios'
import { Loader } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const obj={image:null,stock:1,color:'green'}
const AddProduct = ({setPage}) => {

    const [prod,setProd] = useState(()=>({
        productName : '',
        productDesc : '',
        price : 0,
        categoryName : '',
    }))

    const {loggedUser} = useContext(UserContext);

    const [loading,setLoading] = useState(false);    

    const [prodVars,setProdVars] = useState([obj,{image:null,stock:1,color:'yellow'},obj,obj]);
    const [prodV,setProdV] = useState(prodVars[0])
    const [pind,setPind] = useState(0);

    useEffect(()=>{
        let prods = [...prodVars];
        prods[pind]=prodV;
        setProdVars(prods); 
        // console.log(prodV);
        
    },[prodV])

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setProd(p=>({
            ...p,
            [name] : value
        }))
    }

    const handleSubmit=async()=>{
        if(prod.productDesc=="" || prod.productName=="" || prod.categoryName==""){
            toast.error("Empty fields!")
            return;
        }
        setLoading(true);
        let pvs=[];
        for(let i=0;i<prodVars.length;i++){
            if(prodVars[i].image==null) continue;
            const resp = await axios.post("https://image-server-ebon.vercel.app/upload", { image: prodVars[i].image}, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              });
            console.log(resp.data);
            pvs.push(prodVars[i]);
            pvs[i].imgid=resp.data.imageId;
            delete pvs[i].image;
        }
        const product={
            uid:loggedUser.uid,
            product : prod,
            variants : pvs
        }
        console.log(product);
        
        const resp = await addproduct(product);
        console.log(resp);
        setLoading(false); 
        setPage(2);
        toast("product Added successfully!");
    }

  return (
    <div className='sm:p-4 p-2 sm:px-8 lg:px-56'>
      <div className='border-2 rounded sm:flex flex-col gap-2 p-4'>
        <div className='flex flex-col gap-3'>
            <Input className='' placeholder='Title here' name="productName" onChange={handleInput} />
            <textarea className='rounded border p-2 bg-background' placeholder='Product description' name="productDesc" onChange={handleInput}></textarea>
            <Input type="number" className='' placeholder='Product price' name="price" onChange={handleInput} />
            <div className="dropdown dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="btn bg-slate-800 text-white m-1 w-full">Select Category - {prod.categoryName}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-background">
                    <li onClick={()=>{setProd(p=>({...p,categoryName : "T_SHIRT"}))}}><a>T_SHIRT</a></li>
                    <li onClick={()=>{setProd(p=>({...p,categoryName : "POLO"}))}}><a>POLO</a></li>
                    <li onClick={()=>{setProd(p=>({...p,categoryName : "SHIRT"}))}}><a>SHIRT</a></li>
                    <li onClick={()=>{setProd(p=>({...p,categoryName : "FUNKY_SHIRT"}))}}><a>FUNKY_SHIRT</a></li>
                </ul>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-2 w-full h-20'>
            {prodVars.map((p,ind)=>(
                <div key={ind} className='border border-black rounded hover:cursor-pointer bg-cover bg-center' style={{backgroundImage:`url(${p.image ? URL.createObjectURL(p.image) : ''})`}} onClick={()=>{setPind(ind);setProdV(prodVars[ind])}}></div>
            ))}
        </div>
        <ProductVariant prodV={prodV} setProdV={setProdV} pind={pind}/>
        <Button onClick={handleSubmit} disabled={loading}>{loading ? <Loader className='animate-spin'/> : "Add product"}</Button>
      </div>
    </div>
  )
}

export default AddProduct
