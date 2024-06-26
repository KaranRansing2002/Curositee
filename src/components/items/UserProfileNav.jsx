import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InputWithLabel } from "./Takeinput"
import UserIcon from "@/icons/userIcon"
import AddressIcon from "@/icons/AddressIcon"
import { LogOutIcon, ShoppingBagIcon } from "lucide-react"
import WishListIcon from "@/icons/WishIcon"
import SearchIcon from "@/icons/SearchIcon"
import PasswordIcon from "@/icons/passwordIcon"
import CartIcon from "@/icons/ShoppingBagIcon"
export default function UserProfileNav({setEve}) {
    return (
        <div className='flex flex-col justify-center '>
            <div className="flex justify-center" >
                <Card className='p-0 relative top-6 '>
                    <CardHeader className='p-0 flex flex-row'>
                        <svg height="60" width="80" xmlns="http://www.w3.org/2000/svg">
                            <circle r="23" cx="40" cy="30" fill="grey" />
                        </svg>
                        <p className="pr-2 pt-1">User Name</p>
                    </CardHeader>
                </Card>
            </div>
            <div className='flex justify-center'>
                <Card>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-8 divide-y text-xs p-3 mt-3 ">
                            <div className="">
                                <div className="flex flex-row m-1 pt-6" onClick={()=>setEve(0)}>
                                    <UserIcon />
                                    <a href="#"><p className="p-1">My Profile</p></a>
                                </div>
                                <div className="flex flex-row m-1" onClick={()=>setEve(1)}>
                                    <AddressIcon />
                                    <a href="#"><p className="p-1">Delivery Address</p></a>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1">
                                    <CartIcon />
                                    <a href="#"><p className="p-1">My Orders</p></a>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1">
                                    <WishListIcon/>
                                    <a href="#"><p className="p-1">My WishList</p></a>
                                </div>
                                <div className="flex flex-row m-1">
                                    <SearchIcon/>
                                    <a href="#"><p classsName="p-1">Recently Viewed</p></a>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1">
                                    <PasswordIcon/>
                                    <a href="#"><p>Change Password</p></a>
                                </div>  
                                <div className="flex flex-row m-1">
                                    <LogOutIcon className="mt-10" />
                                    <a href="#"><p className="mt-10 p-1">Log Out</p></a>
                                </div> 
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};