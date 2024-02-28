"use client"

import { useState, useEffect } from 'react'
import { DarkModeContext } from '../DarkModeProvider';
import { useContext } from 'react';

export default function InfoRow({blockName, localStorageKey, passedValue}){
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(passedValue);

    const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const storedValue = localStorage.getItem(localStorageKey);
        if (storedValue) {
        setValue(storedValue);
        }
    }, [localStorageKey]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem(localStorageKey, value);
        setEditing(false);
    };
    
    return(
        <div className='flex flex-row items-center justify-between'>
            <div>
                <h1 className='text-3xl'>{blockName}</h1>
                {editing ? (<input type="text" value={value} onChange={handleChange} className={`border ${darkMode ? "bg-black border-white" : "bg-white border-black"} rounded-lg p-2`}/>) : (<p>{value}</p>)}
                
            </div>
            
            { editing ? (
            <button onClick={handleSave} className={`flex items-center border rounded-lg ${darkMode? "border-white bg-red-700 hover:bg-red-900" : "border-black bg-red-300 hover:bg-red-400"} w-[300px] h-[40px] justify-center p-3  `}>Save Changes</button>) : (
            <button onClick={() => setEditing(true)} className={`flex items-center border rounded-lg ${darkMode? "border-white hover:bg-gray-700" : "border-black hover:bg-gray-300"} w-[300px] h-[40px] justify-center p-3 `}> Change {blockName} </button> )
            }
        </div>
    )
}