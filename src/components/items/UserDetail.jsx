import {
     Card,
     CardContent,
     CardFooter,
} from "@/components/ui/card"
import { InputWithLabel } from "./Takeinput"
import { Button } from "../ui/button";
import EditIcon from "@/icons/editIcon";
import { useContext, useEffect, useState, } from "react";
import axios from 'axios';
import { Input } from "../ui/input";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/App";
import config from "@/config";



export default function UserDetails({visibleButton = false,title='',showEdit=true,handleFn=()=>{}, loggedIn = true}) {
     const {loggedUser} = useContext(UserContext);
     const [user,setUser] = useState({...loggedUser})
     const token = sessionStorage.getItem('token')
     const navigate = useNavigate();
     const handleInput=(e)=>{
          const name = e.target.name;
          const value = e.target.value;
          setUser(u=>({
               ...u,
               [name] : value
          }))
     }

    const [role, setRole] = useState(user.role || ''); // Add state for role

    const handleRoleChange = (event) => {
        setRole(event.target.value);
        handleInput(event); // Ensure this updates the user state as well
    };
     const [isButtonVisible,setVisibility] = useState(visibleButton);
     const DateArr = [];
     
     const buttonClick = () => {
          setVisibility(!isButtonVisible);
     }

     const handleSubmit=async()=>{
          if(Object.keys(user).length==0){
               toast.error("empty fields!")
               return;
          }
          let valid=true;
          Object.keys(user).map(k=>{if(user[k].length==0) {toast.error(`empty field ${k} !`); valid=false;}})
           if (user.password.length < 6) {
               toast.error('password must be greater than 6 chars')
           } 
           
          if(!valid){
               return;
          }
          if(showEdit==false) {
              const resp = await handleFn(user);
              if(resp.status=="success"){
                    toast.success(resp.message);
                    navigate('/login')
                    return;
              }
              else
                    toast.error(resp.message);
          }
          else
               buttonClick();
     }
     const handleUpdate = async(e)=>{
          e.preventDefault();
          user['uid'] = loggedUser.uid;
          user['role'] = loggedUser.role;
          axios.post(`${config.url}/update`,user,{
               headers: {
                    'Authorization': `Bearer ${token}`
               }
          })
            .then(response => {
                UserContext.loggedUser = response.data;
                setUser(response.data);
                console.log('Data sent Updated Successfully!', response.data);
                
            })
            .catch(error => {
                console.error('There was an error sending the data:', error);
            }); 
     }
     return (
          <div>
          <Card className="p-4 shadow-xl shadow-yellow-400">
               <CardContent className='grid gap-4'>
                    <h2 className="font-semibold text-xl ">{loggedIn ? `Hello! ${loggedUser.firstName}` : title}</h2>
                    <div className="flex p-0 m-0  relative mt-1 left-4 justify-end" hidden={!showEdit}>
                        <button onClick={buttonClick}><EditIcon/></button>
                    </div>
                    <div className="flex flex-row p-1">
                         <div className="m-1">
                              <Input placeholder="first name" className='p-4' name="firstName" value = {user.firstName} onChange={handleInput}/>
                         </div>
                         <div className="m-1">
                              <Input placeholder="Last name" className='p-4' name="lastName" onChange={handleInput} value={user.lastName}/>
                         </div>
                    </div>
                    <div className="flex flex-row p-1">
                         <div className="m-1">
                              <Input placeholder="Email" className='p-4' name="email" onChange={handleInput} value={user.email}/>
                         </div>
                         <div className="m-1">
                           <Input placeholder="phone-no" className='p-4' name="phone" onChange={handleInput} value={user.phone}/>
                         </div>
                    </div>
                    
                    <div className="flex gap-2">
                        {( !loggedIn && <Input placeholder="password" className='p-4' name="password" type="password" onChange={handleInput}/>)} 
                         <Input placeholder="date" type="date" className='p-4' name="dob" onChange={handleInput} value={user.dob}/>
                    </div>

                    <div className="mt-4">
                        <select 
                            name="role" 
                            className='' 
                            value={role} 
                            onChange={handleRoleChange}
                            hidden={showEdit} // Hide select if not in edit mode
                        >
                            <option value="">Select Role</option>
                            <option value="VENDOR">Vendor</option>
                            <option value="CUSTOMRER">Customer</option>
                        </select>
                    </div>
                    
                    <div className="mt-4">
                        {(isButtonVisible || showEdit==false) && <Button onClick={loggedIn ? handleUpdate : handleSubmit}>{showEdit==false ? "Register" : "Save"}</Button>} 
                    </div> 
               </CardContent>
          </Card >

     </div>
     )
}