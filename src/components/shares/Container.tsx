import React from 'react'

interface ContainerProps {
    children: React.ReactNode,
    style?: string,
    isPadding: boolean
}

export default function Container({children, style, isPadding}: ContainerProps) {
  return (
    <div className={`width ${isPadding && "py-10"} ${style} `}>
        {children}
    </div>
  )
}
