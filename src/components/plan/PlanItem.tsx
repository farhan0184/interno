import React from 'react'
import Button from '../shares/Button'

export interface PlanItemProps {
    id: number,
    title: string,
    price: string,
    isPopular: boolean,
    list: string[]
}

export default function PlanItem({ title, price, isPopular, list }: PlanItemProps) {
    return (
        <div className=' bg-quaternary text-center py-10 rounded-[30px] hover:shadow-3xl cursor-pointer'>
            <h3 className='header text-xl'>{title}</h3>
            <div className='header text-2xl my-5'>
                <p><span>$</span><span className={`lg:text-7xl md:text-6xl text-5xl ${isPopular && 'text-primary'}`}>{price}</span></p>
                <p>/Month</p>
            </div>
            <div className='relative'>
                <hr className={`h-[2px] ${isPopular ? 'bg-secondary' : 'bg-primary'}`} />
                {isPopular && <p className='px-6 py-2 bg-secondary text-white font-jost rounded-3xl w-max font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>Most Popular Plans</p>}
            </div>
            <ul className='my-8 space-y-5 paragraph'>
                {
                    list.map(item => <li key={item}>{item}</li>)
                }
            </ul>
            <div className='flex justify-center'>
                <Button title='Get Started' url='#' isStyle={isPopular ? true : false} />
            </div>
        </div>
    )
}
