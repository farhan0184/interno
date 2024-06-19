'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface ButtonProps {
    url: string
    title: string
    isStyle?: boolean
}

export default function Button({url, title , isStyle}: ButtonProps) {
    const router = useRouter()
    const [hover, isHover] = React.useState(false)
    return (
        <button onClick={() => router.push(url)} onMouseOver={() => isHover(true)} onMouseLeave={() => isHover(false)} className={`${!isStyle ? 'bg-secondary hover:bg-primary' : ' bg-primary'} px-8 py-3 rounded-lg text-white font-jost centerY gap-2`}>
            {title} <span>
                <FaArrowRight className={`text-[14px] ${!isStyle? ` ${hover?'text-secondary' : 'text-primary'} `: ` ${hover?'text-primary' : 'text-secondary'} `}`} />
            </span>
        </button>
    )
}
