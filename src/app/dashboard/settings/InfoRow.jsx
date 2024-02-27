"use client"

import { useState, useEffect } from 'react'

export default function InfoRow({blockName, passedValue}){
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(passedValue);

    // Effect to load the initial value from localStorage or use the provided prop
    useEffect(() => {
        const storedValue = localStorage.getItem(blockName);
        if (storedValue) {
        setValue(storedValue);
        }
    }, [blockName]);

    // Function to handle value change
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Function to save the value to localStorage and exit edit mode
    const handleSave = () => {
        localStorage.setItem(blockName, value);
        setEditing(false);
    };
    
    return(
        <div className='flex flex-row items-center justify-between'>
            <div>
                <h1 className='text-3xl'>{blockName}</h1>
                <p>{passedValue}</p>
            </div>
            
            { editing ? (
            <button onClick={handleSave} className="flex items-center border rounded-lg border-white w-[300px] h-[40px] justify-center p-3 bg-red-700 hover:bg-red-900">Save Changes</button>) : (
            <button onClick={() => setEditing(true)} className="flex items-center border rounded-lg border-white w-[300px] h-[40px] justify-center p-3 hover:bg-gray-700"> Change {blockName} </button> )
            }
        </div>
    )
}

/*<div className='flex flex-row items-center justify-between'>
            <div>
                <h1 className='text-3xl'>{blockName}</h1>
                <p>{passedValue}</p>
            </div>
            <button className="flex items-center border rounded-lg border-white w-[300px] h-[40px] justify-center p-3 hover:bg-gray-700">Change {blockName}</button>
</div>*/