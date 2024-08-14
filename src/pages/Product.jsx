import MyScrollArea from "@/components/items/MyScrolArea";
import ProductList from "@/components/items/ProductList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

function Products({ }) {
    const ProductSizes = ["S", "M", "L", "XL", "XXL"];
    const Catagories = ['Tshirs', 'Oversized Tshirt', 'Polos', 'Shirts', 'OverSized Shirt', 'Full Sleaves'];
    const Fits = ['Slim Fit', 'Relaxed Fit', 'Oversized Fit', 'Skinny Fit', 'Baggy Fit', 'Custom Fit'];
    const colors = ['Black', 'White', 'Red', 'Grey', 'SkyBlue', 'Cream', 'Pink', 'Brown', 'Crimson', 'Green', 'Mat Black', 'Snow White', 'Parrot', 'Ocean'];
    const prices = ['under-999', 'INR-999 to INR-1999', 'INR-1999 to INR-2999', 'INR-3000 above'];
    const ScrollBars = [ProductSizes, Catagories, Fits, colors, prices];
    const Products = [
    { src: "/src/assets/snitchImage.png", name: 'Checked Cotton Shirt', price: '1500', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Checked Cotton Shirt', price: '1300', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Checked Cotton Shirt', price: '1456', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Checked Cotton Shirt', price: '456', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },
    { src: "/src/assets/snitchImage.png", name: 'Tshirt', price: 'Price', sizes: ['S', 'L', 'M', 'XL', 'XXL'] },

    ];

    return (
        <div>
            <div className="hidden sm:block md:col-span-2 m-2 pt-3 pb-3 ">
                <div className="justify-center">
                    <Accordion type="single" collapsible className="mr-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="h-[40px]">Size</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[100px]">
                                    <MyScrollArea items={ProductSizes} />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="mr-2">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="h-[40px]">Catagory</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[100px]">
                                    <MyScrollArea items={Catagories} />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="mr-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="h-[40px]">Fit</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[100px]">
                                    <MyScrollArea items={Fits} />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="mr-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="h-[40px]">Color</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[100px]">
                                    <MyScrollArea items={colors} />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="mr-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="h-[40px]">Price</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[100px]" >
                                    <MyScrollArea items={prices} />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
            <div className="col-span-12 md:col-span-10  bg-white">
                <ProductList
                    Products={Products}
                />
            </div>
        </div>
    )
}
export default Products;
