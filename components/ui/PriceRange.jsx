'use client';
import { useState } from 'react';
import { Range } from 'react-range';

export default function PriceRange() {
  const STEP = 10;
  const MIN = 100;
  const MAX = 1000;
  const [values, setValues] = useState([100, 700]); // [min, max]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="text-sm">Range</div>
        <div className="text-sm">
          {'       '}$ {values[0]} – $ {values[1]}
        </div>
      </div>

      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 bg-gray-300 rounded relative">
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="w-3 h-3 bg-cyan-500 rounded-full shadow"
            />
          );
        }}
      />
    </div>
  );
}
