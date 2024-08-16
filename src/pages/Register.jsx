import React from 'react'
import UserDetails from '@/components/items/UserDetail'
import { register } from '@/services/user'

export default function Register() {
  const logedIn = false;
  return (
    <div className='flex flex-row h-screen justify-center p-4 mt-10'>
        <UserDetails showEdit={false} title='Register' handleFn={register} loggedIn={logedIn} />
    </div>
  )
}
