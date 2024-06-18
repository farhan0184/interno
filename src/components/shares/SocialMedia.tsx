import Link from 'next/link'
import React from 'react'
import { IconType } from "react-icons";

interface SocialMediaProps {
    icon: React.ReactNode
    link: string
}

export default function SocialMedia({ icons }: { icons: SocialMediaProps[] }) {
    return (
        <>
            {icons.map((item, idx) => (
                <Link href={item.link} key={idx} target="_blank" rel="noopener noreferrer">
                    {item?.icon}
                </Link>
            ))}
        </>
    )
}
