"use client"

import { useState, useEffect } from 'react'

export default function InfoRow({blockName, localStorageKey, passedValue}){
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(passedValue);

    // Effect to load the initial value from localStorage or use the provided prop
    useEffect(() => {
        const storedValue = localStorage.getItem(localStorageKey);
        if (storedValue) {
        setValue(storedValue);
        }
    }, [localStorageKey]);

    // Function to handle value change
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Function to save the value to localStorage and exit edit mode
    const handleSave = () => {
        localStorage.setItem(localStorageKey, value);
        setEditing(false);
    };
    
    return(
        <div className='flex flex-row items-center justify-between'>
            <div>
                <h1 className='text-3xl'>{blockName}</h1>
                {editing ? (<input type="text" value={value} onChange={handleChange} className="border bg-black rounded-lg p-2"/>) : (<p>{value}</p>)}
                
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