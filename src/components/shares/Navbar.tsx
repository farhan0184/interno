import React from 'react'

import { link } from 'fs'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Logo from './Logo'

export default function Navbar() {
    const linkList = [
        {
            title: "Home",
            link: '/'
        },
        {
            title: "Pages",
            link: '/'
        },
        {
            title: "Services",
            link: '/'
        },
        {
            title: "Project",
            link: '/'
        },
        {
            title: "Blog",
            link: '/'
        },
        {
            title: "Contact",
            link: '/'
        },
    ]
    return (
        <div className='width py-7 centerY justify-between z-30'>
            <Logo />
            <div className='centerY gap-4'>
                <div className='md:flex hidden gap-4'>
                    {
                        linkList?.map((item, idx) => (
                            <Link className='text-[16px] font-jost hover:text-primary text-secondary' href={item.link} key={idx}>{item.title}</Link>
                        ))
                    }
                </div>
                <div>
                    <CiSearch className='text-2xl hover:text-primary text-secondary' />
                </div>
                <div className='md:hidden block'>
                    <HiOutlineBars3 className='text-2xl text-secondary hover:text-primary'/>
                </div>
            </div>
        </div>
    )
}
