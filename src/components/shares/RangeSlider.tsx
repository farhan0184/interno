'use client'
import React, { useState, useEffect, useRef } from 'react';

interface RangeSliderProps {
    title: string;
    min: number;
    max: number;
    val: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ title, min, max, val }) => {
    const [value, setValue] = useState(min);
    const [thumbPosition, setThumbPosition] = useState(0);
    const rangeRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        updateThumbPosition(newValue);
    };

    const updateThumbPosition = (value: number) => {
        if (rangeRef.current) {
            const rangeWidth = rangeRef.current.clientWidth;
            const thumbPosition = ((value - min) / (max - min)) * rangeWidth;
            setThumbPosition(thumbPosition);
        }
    };

    useEffect(() => {
        updateThumbPosition(value);
    }, [value, min, max]);

    useEffect(() => {
        const val = (value - min) / (max - min);
        const percent = val * 100;

        const rangeInput = rangeRef.current;
        if (rangeInput) {
            rangeInput.style.backgroundImage = `-webkit-gradient(linear, left top, right top, 
                color-stop(${percent}%, #CDA274), 
                color-stop(${percent}%, #F4F0EC)
            )`;
            rangeInput.style.backgroundImage = `-moz-linear-gradient(left center, #CDA274 0%, #CDA274 ${percent}%, #F4F0EC ${percent}%, #F4F0EC 100%)`;
        }
    }, [value, min, max]);

    useEffect(() => {
        let start = min;
        const duration = 1000; // duration of the animation in ms
        const stepTime = 10; // step time in ms
        const steps = duration / stepTime;
        const increment = (val - min) / steps;

        const animateSlider = () => {
            if (start < val) {
                start += increment;
                setValue(start);
                updateThumbPosition(start);
                requestAnimationFrame(animateSlider);
            } else {
                setValue(val); // Ensure the final value is exactly as specified
                updateThumbPosition(val);
            }
        };

        animateSlider();
    }, [min, val]);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <h2 className='font-bold font-dmSerif text-secondary'>{title}</h2>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                className="range-slider"
                style={{ width: '100%' }}
                ref={rangeRef}
            />
            <div
                style={{
                    position: 'absolute',
                    left: `${thumbPosition}px`,
                    transform: 'translateX(-50%)',
                    top: '-1px',
                    width: 'max-content',
                   
                }}
                className='text-secondary font-dmSerif bg-transparent'
            >
                {Math.round(value)} %
            </div>
        </div>
    );
};

export default RangeSlider;
