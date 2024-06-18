'use client'
import React from 'react'
import TitleDisc from '../shares/TitleDisc'
import { image10, image11, image6, image7, image8, image9 } from '@/assets/images'
import Article from '../shares/Article'

const blogs = [
    {
        title: 'Lets Get Solution For Building Construction Work',
        subTitle: "Kitchan Design",
        date: '26 May,2024',
        img: image6,
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        subTitle: "Living Design",
        date: '22 May,2024',
        img: image7,
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        subTitle: "Interior Design",
        date: '20 May,2024',
        img: image8,
    },
    {
        title: 'Lets Get Solution For Building Construction Work',
        subTitle: "Kitchan Design",
        date: '26 May,2024',
        img: image9,
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        subTitle: "Living Design",
        date: '22 May,2024',
        img: image10,
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        subTitle: "Interior Design",
        date: '20 May,2024',
        img: image11,
    },
]

export default function Articles({isHome}: {isHome: boolean}) {
    const data = isHome ? blogs.slice(0, 3) : blogs
    const [id, setId] = React.useState(-1)
    return (
        <div className={`${isHome &&'py-20 '}`}>
            {isHome&&<TitleDisc title='Articles & News' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.' style='md:w-[70%] w-full mx-auto text-center' />}


            <div className={`sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-wrap justify-center  gap-3 ${isHome?'mt-14':''}`}>
                {
                    data.map((item, idx) => (
                        <Article key={idx} item={item} idx={idx} setId={setId} id={id} />
                    ))
                }
            </div>
        </div>
    )
}
