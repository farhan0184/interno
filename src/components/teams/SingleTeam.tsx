'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface SingleTeamProps {
    id: number;
    name: string;
    title: string;
    img: StaticImageData | string;
    links: {
        icon: React.JSX.Element;
        link: string;
    }[];
}

export default function SingleTeam({ team, name }: {team:SingleTeamProps, name:string}) {
    const { push } = useRouter()
    return (
        <div key={team.id} className='cursor-pointer' onClick={() => push(`/teams/${name}`)}>
            <Image src={team.img} alt={team.name} className='rounded-2xl' />
            <div className='text-center space-y-1'>
                <h1 className='font-dmSerif font-bold text-[18px] text-secondary'>{team.name}</h1>
                <h3 className='paragraph'>{team.title}</h3>
                <div className='flex justify-center gap-3'>
                    {
                        team.links.map((link, idx) => (
                            <div key={idx}>
                                <Link href={link.link} target='_blank'>
                                    {link.icon}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
