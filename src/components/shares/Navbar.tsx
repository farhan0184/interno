'use client'
import React from 'react'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const linkList = [
        {
            title: "Home",
            link: '/'
        },
        {
            title: "Services",
            link: '/services'
        },
        {
            title: "Projects",
            link: '/projects'
        },
        {
            title: "Blogs",
            link: '/blogs'
        },
        {
            title: "Contact",
            link: '/contact'
        },
        {
            title: "FAQ",
            link: '/faq'
        },
    ]
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    return (
        <div className={`width py-7 z-50 ${open?'bg-white':'bg-transparent'}`}>
            <div className='centerY justify-between'>
                <Logo />
                <div className='centerY gap-4'>
                    <div className='md:flex hidden  gap-4'>
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
                        <HiOutlineBars3 onClick={()=>setOpen(!open)} className='text-2xl text-secondary hover:text-primary' />
                    </div>
                </div>
            </div>
            {open &&<div className='md:hidden flex flex-col gap-3 items-center absolute top-0 left-0 w-full mt-16 bg-white pb-5 '>
                {
                    linkList?.map((item, idx) => (
                        <div onClick={()=>{
                            setOpen(!open)
                            router.push(item.link)
                        }} className='text-[16px] font-jost hover:text-primary text-secondary cursor-pointer'  key={idx}>{item.title}</div>
                    ))
                }
            </div>}
        </div>
    )
}
