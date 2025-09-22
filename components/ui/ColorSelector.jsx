'use client';
import React, { useState } from 'react';

const COLORS = [
  { name: 'Blue', color: '#2196F3' },
  { name: 'Red', color: '#FF4C4C' },
  { name: 'Black', color: '#222222' },
  { name: 'Yellow', color: '#FFFF33' },
  { name: 'Pink', color: '#FF00BF' },
  { name: 'Light', color: '#F4EAEA' },
];

export default function ColorSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-row justify-between items-center">
      {COLORS.map((col, idx) => (
        <label key={col.name} className="cursor-pointer relative">
          <input
            type="radio"
            name="color"
            checked={selected === idx}
            onChange={() => setSelected(idx)}
            className="hidden"
          />
          <span
            className={`w-5 h-5 rounded-full inline-block box-border 
              transition-[border] duration-200 
              ${
                selected === idx ? 'border-[5px] border-[#2196F3]' : 'border-0'
              }`}
            style={{ backgroundColor: col.color }}
          />
        </label>
      ))}
    </div>
  );
}
