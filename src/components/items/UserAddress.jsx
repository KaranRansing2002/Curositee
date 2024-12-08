import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import { InputWithLabel } from "./Takeinput"
import axios from "axios";
import { UserContext } from "@/App";
import config from "@/config";
import { Input } from "../ui/input";
import { toast } from "react-toastify";


export default function UserAddress() {
    const token = sessionStorage.getItem('token');
    const [addresses, setaddresses] = useState([]);
    const { loggedUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        aid: '',
        currentAddress: '',
        city: '',
        street: '',
        pinCode: '',
        state: '',
        uid: loggedUser.uid
    });

    const handleInput = (e) => {
        console.log("hello")
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const resp = await axios.post(`${config.url}/addAddress`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(resp.data){
                
                toast.success(resp.data.message)
            }
        } catch (error) {
            console.log(error)
            if(error.code=="ERR_BAD_REQUEST"){
                toast.error(error.response?.data?.errors[0]?.defaultMessage)
            }
            else toast.error("some error occured!"); 
        }
        
    };


    useEffect(() => {
        const url = `http://localhost:8080/address?uid=${loggedUser.uid}`;
        axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setaddresses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <Card className="p-1 shadow-xl shadow-yellow-400">
                <CardContent className='grid gap-4'>
                    <h2 className="font-semibold text-xl ">Add User Adddress</h2>
                    <div className="flex flex-row p-1">
                        <div className="m-1">
                            <Input placeholder="Current Address" className='p-4' name="currentAddress" onChange={handleInput} />
                        </div>
                        <div className="m-1">
                            <Input placeholder="Street" className='p-4' name="street" onChange={handleInput} />
                        </div>
                    </div>
                    <div className="flex flex-row p-1">
                        <div className="m-1">
                            <Input placeholder="City" className='p-4' name="city" onChange={handleInput} />
                        </div>
                        <div className="m-1">
                            <Input placeholder="pinCode" className='p-4' name="pinCode" onChange={handleInput} />
                        </div>
                    </div>

                    <div className="flex flex-row gap-1">
                        <Input placeholder="state" className='p-4' name="state" onChange={handleInput} />
                    </div>

                    <div className="mb-1">
                        <Button onClick={handleSubmit}>Save</Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="address-container p-3 bg-gradient-to-r  rounded-2xs">
                        <div className="address-cards grid  md:grid-cols-2 gap-2">
                            {addresses.map((address, index) => (
                                <div className="address-card p-4 bg-gray-6 rounded-lg shadow-md text-xs" key={address.id}>
                                    <p>{address.currentAddress} </p>
                                    <p>{address.street} {address.city} </p>   
                                    <p>{address.state} {address.pinCode}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card >
        </div>
    )
}
