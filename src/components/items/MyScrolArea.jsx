import * as React from 'react'
import ReactDom from 'react'
import { Checkbox } from "@/components/ui/checkbox"
function MyScrollArea({items}) {
    return (
        <div>
            {items.map((item) => (
                <div className='flex flex-col text-xs p-1'>
                    <div key={item} className="grid grid-cols-3">
                        <Checkbox className=" "/>
                        <p className='col-span-2'>{item}</p>
                    </div>
                </div>

            ))}
        </div>

    )
}
export default MyScrollArea;