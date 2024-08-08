import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { InputWithLabel } from "./Takeinput"

export default function UserAddress() {
    return (
        <div className="flex mt-9">
            <Card>
                <CardContent className="flex flex-col m-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InputWithLabel
                            property={{
                                lable: "Street",
                                type: "text",
                                id: 'sName',
                                placeholder: "Street Name"
                            }}
                        />
                        <InputWithLabel
                            property = {{
                                lable: "State",
                                type: "text",
                                id: 'stateName',
                                placeholder: "State"
                            }}
                        />
                        <InputWithLabel 
                            property = {{
                                lable: "Current Address",
                                type: "text",
                                id: 'address',
                                placeholder: "Current Address"
                            }}
                        />
                        <InputWithLabel 
                            property = {{
                                lable: "City",
                                type: "text",
                                id: 'city',
                                placeholder: "City"
                            }}
                        />
                        <InputWithLabel
                            property = {{
                                lable: "Pincode",
                                type: "text",
                                id: 'pin',
                                placeholder: "Pincode"
                            }}
                        />
                        <InputWithLabel
                           property = {{
                               lable : "mobile",
                               type : "text",
                               id : "mob",
                               placeholder : "Mobile No"

                           }}
                        />
                    </div>
                    <div className="flex flex-1 justify-center items-center mt-5">
                        <Button>Save</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
