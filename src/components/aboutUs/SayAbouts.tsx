'use client'
import { sayAboutData } from '@/libs/data'
import React from 'react'
import SayAbout from './SayAbout'

export default function SayAbouts() {
    const [id, setId] = React.useState(-1)
    return (
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-5 mt-5 '>
            {
                sayAboutData.map((item, idx) => (
                    <SayAbout key={idx} item={item} idx={idx} id={id} setId={setId} />
                ))
            }
        </div>

    )
}
