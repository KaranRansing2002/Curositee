import UserDetails from "@/components/items/UserDetail";
import UserProfileNav from "@/components/items/UserProfileNav";

export default function UserD(){
    return (
        <div className="flex flex-row h-screen justify-center p-4">
            <div>
               <UserProfileNav/>
            </div>
            <div> 
                <UserDetails/>
            </div>
        </div>
    )
}