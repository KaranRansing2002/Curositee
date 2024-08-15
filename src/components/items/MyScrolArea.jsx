import React, { useState } from 'react';

function MyScrollArea({ items, name, setSize, setColor, setCategory, setPrice }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemChange = (item) => {
        if (name === 'color') {
            setColor((prev) => (prev === item ? null : item));
        }

        if (name === 'cat') {
            setCategory((prev) => (prev === item ? null : item));
        }

        if (name === 'size') {
            setSize((prev) => (prev === item ? null : item));
        }

        if (name === 'price') {
            setPrice(item); 
        }

        if (name !== 'price') 
            { 
            setSelectedItem((prev) => (prev === item ? null : item));
        }
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item} className='flex flex-col text-xs p-1'>
                    <div className="grid grid-cols-3 items-center">
                        <input
                        className='cursor-pointer'
                            type="checkbox"
                            checked={selectedItem === item}
                            onChange={() => handleItemChange(item)}
                        />
                        <p className='col-span-2'>{item}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyScrollArea;
