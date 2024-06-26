import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import img1 from '../../assets/carousel2.jpeg'
import img2 from '../../assets/carousel1.jpeg'
import img3 from '../../assets/carousel3.jpeg'



const carouselImages = [img1, img2,'https://www.snitch.co.in/cdn/shop/files/Artboard_3_2_1_1400x.jpg?v=1718789300'];

const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className='w-full'>
            <Carousel
                plugins={[plugin.current]}
                className="w-full overflow-hidden p-0"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {carouselImages.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-0 flex w-full">
                                        <img src={image} className='w-full'/>
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

export default Hero
