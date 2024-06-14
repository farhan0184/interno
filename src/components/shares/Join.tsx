import React from 'react'

import TitleDisc from './TitleDisc'
import Button from './Button'


export default function Join() {
    return (

        <div  className='bg-secondary py-20 rounded-[60px]'>
            <TitleDisc title='Wanna join the interno?' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.' style='md:w-[70%] w-full mx-auto text-center' titleStyle='text-white' discStyle='text-white my-5' />
            <div className='centerY justify-center '>
                <Button title='Contact With Us' url='#' isStyle={true} />
            </div>
        </div>

    )
}
