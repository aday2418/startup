"use client"

import { useState } from 'react'
import { DarkModeContext } from '../DarkModeProvider';
import { useContext } from 'react';
import { setMongoValue } from '../../../actions/setMongoValue';
import { useRouter } from 'next/navigation';

export default function InfoRow({blockName, mongoKey, passedValue}){
    const router = useRouter()
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(passedValue);

    const { darkMode } = useContext(DarkModeContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSave = async () => {
        await setMongoValue(mongoKey, value);
        setEditing(false);
        router.refresh()
    };
    
    return(
        <div className='flex flex-row items-center justify-between'>
            <div>
                <h1 className='text-3xl'>{blockName}</h1>
                {editing ? (<input type="text" value={value} onChange={handleChange} className={`border ${darkMode ? "bg-black border-white" : "bg-white border-black"} rounded-lg p-2`}/>) : (<p>{value}</p>)}
                
            </div>
            
            { editing ? (
            <button onClick={handleSave} className={`flex items-center border rounded-lg ${darkMode? "border-white bg-green-700 hover:bg-green-900" : "border-black bg-green-200 hover:bg-green-400"} w-[300px] h-[40px] justify-center p-3  `}>Save Changes</button>) : (
            <button onClick={() => setEditing(true)} className={`flex items-center border rounded-lg ${darkMode? "border-white hover:bg-gray-700" : "border-black bg-gray-100 hover:bg-gray-300"} w-[300px] h-[40px] justify-center p-3 `}> Change {blockName} </button> )
            }
        </div>
    )
}