import { Icon1, Icon2, Icon3, Icon4, Work1, Work2, Work3, Work4 } from '@/assets/images'
import WorkSystem from '@/components/home/WorkSystem'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Join from '@/components/shares/Join'
import TitleDisc from '@/components/shares/TitleDisc'
import Image from 'next/image'
import React from 'react'

const workSystemData = [
    {
        title: "Project Plan",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Interior Work",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Retail Design",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Art Work",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Reallization",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Decoration Work",
        disc: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
  ]

const workData =[
    {
        img: Work1,
        icon: Icon1,
        title: 'Concept & Details',
        subTitle: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the printing and typesetting indufstry.',
        isOrderLast: false
    },
    {
        img: Work2,
        icon: Icon2,
        title: 'Idea for Work',
        subTitle: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the printing and typesetting indufstry.',
        isOrderLast: true
    },
    {
        img: Work3,
        icon: Icon3,
        title: 'Design',
        subTitle: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the printing and typesetting indufstry.',
        isOrderLast: false
    },
    {
        img: Work4,
        icon: Icon4,
        title: 'Perfection',
        subTitle: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the printing and typesetting indufstry.',
        isOrderLast: true
    },
]
export default function Services() {
    const img = '/services.jpg'
    return (
        <div>
            <AllHeader img={img} title='Services' disc='Home / Services' />
            <Container isPadding={false} >
                <WorkSystem data={workSystemData}/>

                <div className='bg-quaternary py-20 mb-20 rounded-[30px]'>
                    <TitleDisc title='How We Work' disc='It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.' style='md:w-[70%] w-[90%] mx-auto text-center space-y-5' />

                    <div className='md:w-[80%] w-[90%] mx-auto space-y-10 mt-10'>
                        {
                            workData?.map((item, idx) => (
                                <div key={idx} className='md:flex items-center  gap-5 md:space-y-0 space-y-5'>
                                    <div className={`md:w-1/2 w-full ${item?.isOrderLast&& 'order-last'}`}>
                                        <Image src={item.img} alt="image"  className='rounded-bl-[70%] w-full '/>
                                    </div>
                                    <div className={`md:w-1/2 w-full ${!item?.isOrderLast && 'md:pl-6'} space-y-14`}>
                                        <div className='centerY justify-between'>
                                            <Image src={item.icon} alt="image" width={60} height={60} />
                                            <div className='text-7xl text-white font-dmSerif font-bold'>
                                                0{idx + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='header text-[28px]'>{item.title}</h3>
                                            <p className='paragraph text-[16px]'>{item.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Join />
            </Container>
        </div>
    )
}
