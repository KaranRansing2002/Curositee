import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InputWithLabel } from "./Takeinput"
import UserIcon from "@/icons/userIcon"
import AddressIcon from "@/icons/AddressIcon"
import { LogOutIcon, ShoppingBagIcon } from "lucide-react"
import WishListIcon from "@/icons/WishIcon"
import SearchIcon from "@/icons/SearchIcon"
import PasswordIcon from "@/icons/passwordIcon"
import CartIcon from "@/icons/ShoppingBagIcon"
import { Link } from "react-router-dom"
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
                        <div className="grid grid-cols-1 divide-y text-xs">
                            <div className="">
                                <div className="flex flex-row m-1 pt-6" onClick={()=>setEve(0)}>
                                    <UserIcon />
                                    <Link><p className="p-1">My Profile</p></Link>
                                </div>
                                <div className="flex flex-row m-1" onClick={()=>setEve(1)}>
                                    <AddressIcon />
                                    <Link><p className="p-1">Delivery Address</p></Link>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1" onClick={()=>setEve(2)}>
                                    <CartIcon />
                                    <Link><p className="p-1">My Orders</p></Link>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1">
                                    <WishListIcon/>
                                    <Link to='/wishList'><p className="p-1">My WishList</p></Link>
                                </div>
                                <div className="flex flex-row m-1">
                                    <SearchIcon/>
                                    <Link to='/'><p classsName="p-1">Recently Viewed</p></Link>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-row m-1">
                                    <PasswordIcon/>
                                    <Link to='/register'><p>Change Password</p></Link>
                                </div>  
                                <div className="flex flex-row m-1">
                                    <LogOutIcon className="" />
                                    <Link><p className="p-1">Log Out</p></Link>
                                </div> 
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};