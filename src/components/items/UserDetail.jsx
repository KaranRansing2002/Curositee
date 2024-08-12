import {
     Card,
     CardContent,
} from "@/components/ui/card"
import { InputWithLabel } from "./Takeinput"
import { SelectD } from "./mySelect"
import { Button } from "../ui/button";
import { GenderRadio } from "./GenderRadio";
import EditIcon from "@/icons/editIcon";
import { useState } from "react";
import axios from 'axios';


export default function UserDetails({visibleButton = false,title=''}) {
     const [FirstName,setFirstName] = useState('');
     const [LastName,setLastName] = useState('');
     const [Email,setEmail] = useState('');
     const [PhoneNo,setPhoneNo] = useState('');
     const [Date,setDate] = useState('Date');
     const [Year,setYear] = useState('Year');
     const [Month,setMonth] = useState('month');

     const [isButtonVisible,setVisibility] = useState(visibleButton);
     const DateArr = [];
     const allMonth = ['January','Febuary','March','April','May','June','july','August','September','October','November','December'];
     for(var i = 1; i <=30 ; i++){
          DateArr.push(i);
     }
     const yearArr = [];
     for(var i = 1970; i <= 2024; i++){
          yearArr.push(i);
     }
     const buttonClick = () => {
           setVisibility(!isButtonVisible);
           axios.post('http://localhost:5173/data',{
               FirstName: FirstName,
               LatName : LastName,
               Email : Email,
               PhoneNo : PhoneNo,
           })
     }
     return (
          <div>
          <h1 className="mb-5 text-lg">{title}</h1>
          <Card>
               <CardContent>
                    <div className="flex p-0 m-0  relative mt-1 left-4 justify-end">
                        <button onClick={buttonClick}><EditIcon/></button>
                    </div>
                    <div className="flex flex-row p-1">
                         <div className="m-1">
                              <InputWithLabel
                                   property={{
                                        lable: "First Name",
                                        type: "text",
                                        id: '01',
                                        placeholder: "First Name",
                                   }}
                                   onChange ={(e) => setFirstName(e.target.value)}
                              />
                         </div>
                         <div className="m-1">
                              <InputWithLabel
                                   property={{
                                        lable: "Last Name",
                                        type: "text",
                                        id: '02',
                                        placeholder: "Last Name"
                                   }}
                                   onChange ={(e) => setLastName(e.target.value)}
                              />
                         </div>
                    </div>
                    <div className="flex flex-row p-1">
                         <div className="m-1">
                              <InputWithLabel
                                   property={{
                                        lable: "Email",
                                        type: "email",
                                        id: '03',
                                        placeholder: "email"
                                   }}
                                   onChange ={(e) => setEmail(e.target.value)}
                              />
                         </div>
                         <div className="m-1">
                              <InputWithLabel
                                   property={{
                                        lable: "Phone No",
                                        type: "text",
                                        id: '04',
                                        placeholder: "+91-8888888888"
                                   }}
                                   onChange ={(e) => setPhoneNo(e.target.value)}
                              />
                         </div>
                    </div>
                    <div className="flex flex-row p-1 ml-3 text-xs">
                       <p>BirthDate</p>
                    </div>
                    <div className="flex flex-row p-1">
                        <div className="mr-3">
                          <SelectD
                             items={DateArr}
                             value = {Date}
                             onChange={setDate}
                          />
                        </div>
                        <div className="mr-3">
                          <SelectD
                             items={allMonth}
                             value = {Month}
                             onChange={setMonth}
                          />
                        </div>
                        <div className="mr-3">
                          <SelectD className=""
                             items={yearArr}
                             value = {Year}
                             onChange={setYear}
                          />
                        </div>
                    </div>
                    <div className="mt-1 p-1 ml-3">
                         <p className="flex justify-start text-xs mb-3 ">Gender</p>
                         <GenderRadio 
                         item1={'Male'}
                         item2={'female'}
                         item3={'Others'}
                         />
                    </div>
                    <div className="mt-4">
                        {isButtonVisible && <Button onClick={buttonClick}>Save</Button>} 
                    </div>
               </CardContent>
          </Card >
     </div>
     )
}