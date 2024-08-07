import { Heart, MenuIcon, Search, User, User2, User2Icon } from 'lucide-react'
import React, { useState } from 'react'
import logo from '../../icons/blackoption.webp'
import CartIcon from '@/icons/ShoppingBagIcon'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'


const Navbar = () => {
    
    return (
        <Sheet>
            <div className='relative'>
                <OffersSlider />
                <div className='p-2  flex gap-2 items-center border-b  '>
                    <SheetTrigger asChild>
                        <Button className='p-2 bg-white text-black hover:bg-white'><MenuIcon className='cursor-pointer' /></Button>
                    </SheetTrigger>
                    <SheetContent side="left" className=''>
                        <SheetHeader>
                            <div className='flex gap-2 items-center'>
                                <div className='rounded-full bg-slate-300 p-3'><User/></div>
                                <Link to='/login'><h2>Login</h2></Link>
                            </div>
                        </SheetHeader>
                        <div className="grid gap-8 p-6 mt-6">
                            <Link to='/' className='font-mono border-b'>NEW ARRIVALS</Link>
                            <Link to='/' className='font-mono border-b'>BEST SELLING</Link>
                            <Link to='/' className='font-mono border-b'>SHOP</Link>
                            <Link to='/' className='font-mono border-b'>USER ACCOUNT</Link>
                            <Link to='/' className='font-mono border-b'>WISHLIST</Link> 
                            <Link to='/' className='font-mono border-b'>Logout</Link>
                        </div>
                        {/* <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter> */}
                    </SheetContent>
                    <Link to='/' className='flex-1 sm:pl-28 flex justify-center'>
                        <img src={logo} className='h-12' />
                    </Link>
                    <div className='sm:flex gap-4 hidden'>
                        <Link to='/account'><User className='cursor-pointer' /></Link>
                        <Search className='cursor-pointer' />
                        <Heart className='cursor-pointer' />
                        <div className='cursor-pointer'><CartIcon /></div>
                    </div>
                    <div className='sm:hidden'>
                        <Search className='cursor-pointer' />
                    </div>
                </div>
            
            </div>
        </Sheet>
    )
}

const OffersSlider = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className=' bg-black'>
            <Carousel
                plugins={[plugin.current]}
                className="w-full overflow-hidden"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-0">
                                <Card className='border-black'>
                                    <CardContent className="flex p-1 bg-black justify-center">
                                        <span className="text-sm text-center text-white">GET FLAT 20% OFF ON 3999/-USE CODE {index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Navbar

/*
https://www.snitch.co.in/cdn/shop/files/Artboard_4_1_400x.jpg?v=1718789301
https://www.snitch.co.in/cdn/shop/files/denim_new_2_2_1_1400x.jpg?v=1717659637
*/ 