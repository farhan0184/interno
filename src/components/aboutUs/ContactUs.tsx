import React from 'react'
import Title from '../shares/Title'
import Input from '../shares/Input'
import Button from '../shares/Button'
import CheckBox from '../shares/CheckBox'
import Container from '../shares/Container'

export default function ContactUs({title,isCheckBox}:{title:string,isCheckBox:boolean}) {
    return (
        <Container isPadding={false} style=''>
            <Title title={title} style='md:w-[70%] mx-auto text-center' />
            <div className='md:w-[80%] mx-auto  mt-10'>
                <div className='flex gap-5 mb-8'>
                    <Input placeholder='Name' />
                    <Input placeholder='Email' />
                </div>
                <div>
                    <Input placeholder='Hello Iam Intrested in..' isTextArea={true} />
                </div>
                {isCheckBox &&<div className='md:flex justify-center'>
                    <CheckBox title='Save my name, email, and website in this browser for the next time I comment.' />    
                </div>}
                <div className='mt-10 flex justify-center'>
                    <Button url='#' title='Send Now' isStyle={false} />
                </div>
            </div>
        </Container>
    )
}
