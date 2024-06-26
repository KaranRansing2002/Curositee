import {
     Card,
     CardContent,
} from "@/components/ui/card"
import { InputWithLabel } from "./Takeinput"
import { SelectD } from "./mySelect"
import { Button } from "../ui/button";
import { GenderRadio } from "./GenderRadio";
import EditIcon from "@/icons/editIcon";

export default function UserDetails() {
     const DateArr = [];
     const Month = ['January','Febuary','March','April','May','June','july','August','September','October','November','December'];
     for(var i = 1; i <=30 ; i++){
          DateArr.push(i);
     }
     const yearArr = [];
     for(var i = 1970; i <= 2024; i++){
          yearArr.push(i);
     }
     
     return (
          <div>
          <h1 className="mb-5 text-lg">Good Morning User!</h1>
          <Card>
               <CardContent>
                    <div className="flex p-0 m-0  relative mt-1 left-4 justify-end">
                        <button><EditIcon/></button>
                    </div>
                    <div className="flex flex-row p-1">
                         <div className="m-1">
                              <InputWithLabel
                                   property={{
                                        lable: "First Name",
                                        type: "text",
                                        id: '01',
                                        placeholder: "First Name"
                                   }}
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
                             value = "Date"
                          />
                        </div>
                        <div className="mr-3">
                          <SelectD
                             items={Month}
                             value = "MM"
                          />
                        </div>
                        <div className="mr-3">
                          <SelectD className=""
                             items={yearArr}
                             value = "YYYY"
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
                    <div className="hidden mt-4">
                         <Button>Save</Button>
                    </div>
               </CardContent>
          </Card >
     </div>
     )
}