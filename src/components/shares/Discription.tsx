import React from 'react'

interface DiscriptionProps {
    disc: string
    style?: string
}

export default function Discription({disc,style}:DiscriptionProps) {
  return (
    <p className={`text-[16px] text-tertiary  font-jost ${style}`}>{disc}</p>
  )
}
