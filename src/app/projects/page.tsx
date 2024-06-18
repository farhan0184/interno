'use client'
import { Bedroom1, Bedroom2, Bedroom3, Bedroom4, Bedroom5, Bedroom6, Bedroom7 } from '@/assets/images'
import SingleProject from '@/components/projects/SingleProject'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import React from 'react'

const ourProjectData = [
    {
        id: 1,
        imgs: [
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom1,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom2,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom3,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom4,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom5,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom6,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom7,
                style: ''
            },
        ],
        title: 'bathroom'
    },
    {
        id: 2,
        imgs: [
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom1,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom2,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom3,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom4,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom5,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom6,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom7,
                style: ''
            },
        ],
        title: 'bedroom'
    },
    {
        id: 3,
        imgs: [
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom1,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom2,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom3,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom4,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom4,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom5,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom6,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom7,
                style: ''
            },
        ],
        title: 'livingroom'
    },
    {
        id: 4,
        imgs: [
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom1,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom2,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom3,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom4,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom5,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom6,
                style: ''
            },
            {
                title: 'Minimal Bedroom',
                disc: 'Decor / Artchitecture',
                img: Bedroom7,
                style: ''
            },
        ],
        title: 'kitchen'
    }
]

export default function Projects() {
    const [tab, setTab] = React.useState('bathroom')
    const data = ourProjectData.find(item => item.title === tab)?.imgs
    const img = '/projects.png'
    return (
        <div>
            <AllHeader img={img} title='Projects' disc='Home / Projects' />
            <Container isPadding={false} style='my-20 '>

                <div className='md:w-[70%] mx-auto border-[1px] rounded-2xl border-primary grid grid-cols-4 text-center font-jost font-bold'>
                    <p className={`py-3 cursor-pointer ${tab === 'bathroom' && 'bg-primary text-white rounded-2xl '}`} onClick={() => setTab('bathroom')}>Bathroom</p>
                    <p className={`py-3 cursor-pointer ${tab === 'bedroom' && 'bg-primary text-white rounded-2xl '}`} onClick={() => setTab('bedroom')}>Bed Room</p>
                    <p className={`py-3 cursor-pointer ${tab === 'livingroom' && 'bg-primary text-white rounded-2xl '}`} onClick={() => setTab('livingroom')}>Living Room</p>
                    <p className={`py-3 cursor-pointer ${tab === 'kitchen' && 'bg-primary text-white rounded-2xl '}`} onClick={() => setTab('kitchen')}>Kitchen</p>
                </div>
                <div>
                    {tab === 'bathroom' && <div className='columns-2  gap-5 my-10' >
                            {data?.map((item, idx) => 
                             <SingleProject item={item} key={idx} isHome={false} />
                            )}
                        </div>}
                    {tab === 'bedroom' &&
                        <div className='columns-2  gap-5 my-10' >
                            {data?.map((item, idx) => 
                             <SingleProject item={item} key={idx} isHome={false} />
                            )}
                        </div>
                    }
                    {tab === 'livingroom' && <div className='columns-2  gap-5 my-10' >
                            {data?.map((item, idx) => 
                             <SingleProject item={item} key={idx} isHome={false} />
                            )}
                        </div>}
                    {tab === 'kitchen' && <div className='columns-2  gap-5 my-10' >
                            {data?.map((item, idx) => 
                             <SingleProject item={item} key={idx} isHome={false} />
                            )}
                        </div>}
                </div>

                <div className='flex gap-3 w-max mx-auto'>
                    <div className='w-8 h-8 centerY justify-center border-[1px] border-primary rounded-full font-semibold font-jost'>1</div>
                    <div  className='w-8 h-8 centerY justify-center border-[1px] border-primary rounded-full font-semibold font-jost'>2</div>
                    <div  className='w-8 h-8 centerY justify-center border-[1px] border-primary rounded-full font-semibold font-jost'>3</div>
                    <div  className='w-8 h-8 centerY justify-center border-[1px] border-primary rounded-full font-semibold font-jost'>{'>'}</div>
                </div>
            </Container>
        </div>
    )
}
