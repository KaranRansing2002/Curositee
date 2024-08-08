import React from 'react'
import UserDetails from "@/components/items/UserDetail";

const Register = () => {
  const  isButtonVisible = true;
  return(
    <div className='flex flex-row h-screen justify-center p-4 mt-10'>
     <UserDetails visibleButton={isButtonVisible} title = "Welcome To Snitch!.Register Here" />
    </div>
  ) 
}

export default Register 
