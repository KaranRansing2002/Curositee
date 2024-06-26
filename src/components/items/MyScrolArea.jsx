import * as React from 'react'
import ReactDom from 'react'
import { Checkbox } from "@/components/ui/checkbox"
function MyScrollArea({items}) {
    return (
        <div>
            {items.map((item, index) => (
                <div className='flex flex-col text-xs p-1'>
                    <div key={index} className="grid grid-cols-3">
                        <Checkbox className=" "/>
                        <p className='col-span-2'>{item}</p>
                    </div>
                </div>

            ))}
        </div>

    )
}
export default MyScrollArea;
{/* <div className="flex flex-row gap-3">
                <p>S</p>
                <Checkbox />
            </div>
            <div className="flex flex-row">
                <p>M</p>
                <div className="flex items-end"><Checkbox /></div>
            </div>
            <div className="flex items-end">
                <p>L</p>
                <div><Checkbox /></div>
            </div>
            <div className="flex flex-row">
                <p>XL</p>
                <div><Checkbox /></div>
            </div>
            <div className="flex flex-row">
                <p>XXL</p>
                <div><Checkbox /></div>
            </div> */}