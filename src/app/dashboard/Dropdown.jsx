"use client"
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from './DarkModeProvider';

export default function Dropdown({ setDropdownChange, dropdown }){
    const { darkMode } = useContext(DarkModeContext)

    const options = [
        { value: 'short_term', label: 'Short Term' },
        { value: 'medium_term', label: 'Medium Term' },
        { value: 'long_term', label: 'Long Term' },
    ];

    const handleDropdownChange = (event) => {
        setDropdownChange(event.target.value)
    }
    
    const getOrderedOptions = () => {
        const selectedOption = options.find(option => option.value === dropdown);
        const otherOptions = options.filter(option => option.value !== dropdown);
        return [selectedOption, ...otherOptions];
    };

    return (
        <div className="flex justify-center items-center my-4 min-w-[150px]">
            <select
                onChange={handleDropdownChange}
                className={`flex appearance-none w-full border text-center px-4 py-2 rounded shadow ${darkMode? "border-white hover:bg-gray-800 bg-black" : "border-black bg-white hover:bg-gray-200 text-black"} focus:outline-none focus:shadow-outline`}>
                {getOrderedOptions().map(option => (
                    <option key={option.value} value={option.value}>
                        {dropdown === option.value ? `${option.label} ▼` : option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

