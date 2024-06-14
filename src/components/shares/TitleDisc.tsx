import React from 'react'
import Title from './Title'
import Discription from './Discription'


interface TitleDiscProps {
    title: string
    disc: string
    titleStyle?: string
    discStyle?: string
    style?: string
}

export default function TitleDisc({title,disc, titleStyle, discStyle, style}:TitleDiscProps) {
  return (
    <div className={style}>
        <Title title={title} style={titleStyle}/>
        <Discription disc={disc} style={discStyle}/>
    </div>
  )
}
