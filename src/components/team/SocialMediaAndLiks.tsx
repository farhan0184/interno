import React from 'react'
import { ImEarth } from 'react-icons/im'
import { IoMdMail } from 'react-icons/io'
import { IoCallOutline } from 'react-icons/io5'
import SocialMedia from '../shares/SocialMedia'
import { icons } from '../shares/Footer'

export default function SocialMediaAndLiks({isContact}:{isContact?:boolean}) {
    return (
        <>
            <>
                <div className='centerY space-x-3'>
                    <div className={`h-8 w-8 centerY justify-center ${isContact ? 'bg-white' : 'bg-quaternary'} rounded-full `}>
                        <IoMdMail size={20} className='text-primary ' />
                    </div>
                    <p className='paragraph'>info@yourdomain.com</p>
                </div>

                <div className='centerY space-x-3'>
                    <div className={`h-8 w-8 centerY justify-center ${isContact ? 'bg-white' : 'bg-quaternary'} rounded-full `}>
                        <IoCallOutline size={20} className='text-primary' />
                    </div>
                    <p className='paragraph'>+1 (378) 400-1234</p>
                </div>
                <div className='centerY space-x-3'>
                    <div className={`h-8 w-8 centerY justify-center ${isContact ? 'bg-white' : 'bg-quaternary'} rounded-full `}>
                        <ImEarth size={20} className='text-primary' />
                    </div>
                    <p className='paragraph'>www.yourdomain.com</p>
                </div>
            </>
            <div className='flex gap-5'>
                <SocialMedia icons={icons} />
            </div>
        </>
    )
}
