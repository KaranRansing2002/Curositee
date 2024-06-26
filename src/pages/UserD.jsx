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

    return (
        <div className="flex flex-row h-screen justify-center p-4">
            <div>
                <UserProfileNav setEve={setEve} />
            </div>
            <div> 
                {
                    eve==0 ? <UserDetails/> : <UserAddress/>
                }
            </div>
        </div>
    )
}