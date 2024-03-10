"use client"
import { useState } from 'react';

export default function Dropdown({ setDropdownChange }){

    const handleDropdownChange = (event) => {
      setDropdownChange(event.target.value)
    }

    return (
        <div className="flex justify-center items-center my-4">
            <select
                onChange={handleDropdownChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="short-term">Short Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="long-term">Long Term</option>
            </select>
        </div>
    )
}

