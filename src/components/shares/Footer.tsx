import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Discription from './Discription'
import Facebook from '../svg/Facebook'
import { link } from 'fs'
import Twitter from '../svg/Twitter'
import Linkedin from '../svg/Linkedin'
import Instagram from '../svg/Instagram'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
export const icons = [
    {
        icon: <Facebook />,
        link: 'https://www.facebook.com/'
    },
    {
        icon: <Twitter />,
        link: 'https://www.x.com/'
    },
    {
        icon: <Linkedin />,
        link: 'https://www.linkedin.com/'
    },
    {
        icon: <Instagram />,
        link: 'https://www.instagram.com/'
    },
]

const data = [
    {
        title: 'Pages',
        subTitle: [
            {
                title: 'About Us',
                link: '#'
            },
            {
                title: 'Our Projects',
                link: '#'
            },
            {
                title: 'Our Team',
                link: '#'
            },
            {
                title: 'Contact Us',
                link: '#'
            },
            {
                title: 'Services',
                link: '#'
            },
        ]
    },
    {
        title: 'Services',
        subTitle: [
            {
                title: 'Kitchan',
                link: '#'
            },
            {
                title: 'Living Area',
                link: '#'
            },
            {
                title: 'Dinning Hall',
                link: '#'
            },
            {
                title: 'Bedroom',
                link: '#'
            },
        ]
    },
    {
        title: 'Contact',
        subTitle: [
            {
                title: '55 East Birchwood Ave. Brooklyn, New York 11201',
                link: '#'
            },
            {
                title: 'contact@interno.com',
                link: '#'
            },
            {
                title: '(123) 456 - 7890',
                link: '#'
            },
        ]
    },
]

export default function Footer() {
    return (
        <div>

            <Container isPadding={false} style=' pt-20 pb-10 md:flex'>
                <div className='md:w-[32%] '>
                    <Logo />
                    <Discription disc='It is a long established fact that a reader will be distracted lookings.' style='py-5 ' />
                    <div className='centerY gap-5 '>
                        <SocialMedia icons={icons} />
                    </div>
                </div>
                <div className='md:w-[68%] flex  md:pl-10 md:mt-0 mt-10'>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className='w-1/3'>
                                <h1 className='header text-[18px] pb-4'>{item.title}</h1>
                                <div className='space-y-4 flex flex-col'>
                                    {
                                        item.subTitle.map((subItem, subIdx) => (
                                            <Link href={subItem.link} key={subIdx} className='paragraph text-[16px] '>{subItem.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
            <div className='paragraph text-center py-5 border-t-[1px] border-gray-300'>
            Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </div>
        </div>
    )
}
