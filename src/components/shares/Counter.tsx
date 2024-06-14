import React from 'react'
import Container from './Container'
import Discription from './Discription'

const data =[
    {
        count: 12,
        title: 'Years Of Experience'
    },
    {
        count: 85,
        title: 'Success Project'
    },
    {
        count: 15,
        title: 'Active Project'
    },
    {
        count: 95,
        title: 'Happy CUstomers'
    }
]

export default function Counter() {
  return (
    <div className='py-10 h-[300px] bg-quaternary w-full'>
        <Container style='flex justify-between items-center h-full' isPadding={false}>
            {data.map((item,idx)=>(
                <div key={idx} className={`w-1/4 h-[110px] text-center flex flex-col justify-between  ${idx !== data.length-1 ?'border-r-[2px] border-primary':''}`}>
                    <h1 className='text-5xl font-dmSerif font-bold mt-2 text-primary mb-3'>{item.count}</h1>
                    <Discription disc={item.title}/>
                </div>
            ))}
        </Container>
    </div>
  )
}
