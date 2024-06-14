import React from 'react'
interface TitleProps{
    title: string,
    style?: string
}
export default function Title({title, style}:TitleProps) {
  return (
    <h1 className={`md:text-4xl text-3xl text-secondary font-dmSerif font-bold ${style}`}>{title}</h1>
  )
}
