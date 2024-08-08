import Orders from "@/components/items/Orders";
import UserAddress from "@/components/items/UserAddress";
import UserDetails from "@/components/items/UserDetail";
import UserProfileNav from "@/components/items/UserProfileNav";
 
import { useState } from "react";

const event = {
    0: <UserDetails />,
    1:<UserAddress/>
}
export default function UserD() {
    const [eve, setEve] = useState(0);
    const CurrentComponent = () => {
        switch(eve){
            case 0:
                return <UserDetails/>
            case 1:
                return <UserAddress/>
            case 2:
                return <Orders/>
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center p-4 mt-10">
            <div>
                <UserProfileNav setEve={setEve} />
            </div>
            <div className="mt-15"> 
                {CurrentComponent()}
            </div>
        </div>
    )
}