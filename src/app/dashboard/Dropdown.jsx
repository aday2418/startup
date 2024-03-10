"use client"
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from './DarkModeProvider';

export default function Dropdown({ setDropdownChange }){

    const { darkMode } = useContext(DarkModeContext)
    const [selectedValue, setSelectedValue] = useState('short-term'); // Default value or from props

    const options = [
        { value: 'short-term', label: 'Short Term' },
        { value: 'medium-term', label: 'Medium Term' },
        { value: 'long-term', label: 'Long Term' },
    ];

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        setDropdownChange(event.target.value)
    }
    
    const getOrderedOptions = () => {
        const selectedOption = options.find(option => option.value === selectedValue);
        const otherOptions = options.filter(option => option.value !== selectedValue);
        return [selectedOption, ...otherOptions];
    };

    return (
        <div className="flex justify-center items-center my-4 min-w-[150px]">
            <select
                onChange={handleDropdownChange}
                className={`flex appearance-none w-full border text-center px-4 py-2 rounded shadow ${darkMode? "border-white hover:bg-gray-800 bg-black" : "border-black bg-white hover:bg-gray-200 text-black"} focus:outline-none focus:shadow-outline`}>
                {getOrderedOptions().map(option => (
                    <option key={option.value} value={option.value}>
                        {selectedValue === option.value ? `${option.label} ▼` : option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

