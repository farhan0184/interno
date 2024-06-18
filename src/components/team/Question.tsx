'use client'
import React from 'react';

interface QuestionProps {
    id: number;
    title: string;
    disc: string;
}

const Question: React.FC<{ item: QuestionProps }> = ({ item }) => {
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`py-3 border-[1px] rounded-xl px-3 ${open&& 'bg-quaternary'}`}>
            <div
                className='centerY justify-between cursor-pointer'
                onClick={toggleOpen}
                aria-expanded={open}
                role="button"
            >
                <h1 className='font-dmSerif font-bold text-secondary'>{item.title}</h1>
                <div className={`h-8 w-8 ${!open ? 'bg-quaternary' : 'bg-white'} text-xl rounded-full centerY justify-center`}>
                    <p>{open ? '-' : '+'}</p>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out `}
                style={{ transition: 'max-height 0.5s ease-in-out' }}
            >
                {open && <p className='paragraph mt-2'>{item.disc}</p>}
            </div>
        </div>
    );
};

export default Question;
