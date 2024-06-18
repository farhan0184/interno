import { SingleBlogImg1, SingleBlogImg2 } from '@/assets/images'
import AllHeader from '@/components/shares/AllHeader'
import Button from '@/components/shares/Button'
import CheckBox from '@/components/shares/CheckBox'
import Container from '@/components/shares/Container'
import Discription from '@/components/shares/Discription'
import { icons } from '@/components/shares/Footer'
import Input from '@/components/shares/Input'
import SocialMedia from '@/components/shares/SocialMedia'
import Title from '@/components/shares/Title'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const latestData = [
    {
        id: 1,
        title: "We Focus On Comfort And Gorgeous",
        date: "06/02/2020"
    },
    {
        id: 2,
        title: "We Focus On Comfort And Gorgeous",
        date: "06/02/2020"
    },
    {
        id: 3,
        title: "We Focus On Comfort And Gorgeous",
        date: "06/02/2020"
    },
]
const categories = [
    'Decoration', 'Door Windows', 'Home Land', "Roof Installation",
]
const tags = [
    'Kitchen', 'Living', 'Office', "Bedroom", "Architecture"
]

export default function SingleBlog() {
    const img = '/singleblogimg.jpg'
    return (
        <div className=''>
            <AllHeader img='/blogs.jpg' title='Single Blog' disc='Home / Blogs / Single Blog' />
            <Container isPadding={false} style='my-20 flex md:flex-row flex-col'>
                {/* left side */}
                <div className='md:w-[66.7%]  md:order-first order-last md:mt-0 mt-10 '>
                    {/* upper section */}
                    <div className='space-y-5'>
                        <Title title='Let&#39;s Get Solution for Building Construction Work' />
                        <Image src={SingleBlogImg1} alt="image" className='  rounded-[30px] ' />
                        <div className='flex justify-between '>
                            <Discription disc='26 December,2022' />
                            <Discription disc='Interior / Design / Home / Decore' />
                        </div>
                        <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don&#39;t look even slightly believable.' style='' />
                        <Discription disc='Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.' style='' />

                        <div className='bg-quaternary h-[250px] centerY  rounded-[30px] '>
                            <div className='w-[50%] mx-auto font-bold font-jost text-center -mt-16 text-primary'>
                                <h1 className='text-[50px] italic'>,,</h1>
                                <h1 className='text-xl  '>The details are not the details.
                                    They make the design.</h1>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <Title title='Design sprints are great' />
                            <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' />
                            <div className='flex'>
                                <p className='text-primary text-[16px] font-jost'>1.</p>
                                <Discription disc='Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' />
                            </div>
                            <div className='flex'>
                                <p className='text-primary text-[16px] font-jost'>2.</p>
                                <Discription disc='Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' />
                            </div>
                            <div className='flex'>
                                <p className='text-primary text-[16px] font-jost'>3.</p>
                                <Discription disc='Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' />
                            </div>
                        </div>
                        <div>
                            <Image src={SingleBlogImg2} alt="image" className='  rounded-[30px] ' />
                        </div>
                        <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' />
                    </div>

                    {/* tag and social media icon and link */}
                    <div className='border-t-[1px] border-b-[1px] py-5  my-8 centerY justify-between'>
                        <div className='paragraph centerY gap-3'>
                            <p className='font-bold'>Tags:</p>
                            <p className='py-2 px-5 bg-secondary rounded-2xl text-white'>Kitchan</p>
                            <p className='py-2 px-5 bg-quaternary rounded-2xl'>Bedroom</p>
                        </div>
                        <div className='centerY gap-5 '>
                            <SocialMedia icons={icons} />
                        </div>
                    </div>

                    {/* leave message */}
                    <div className=''>
                        <h1 className='header text-xl mb-5'>Leave a message</h1>
                        <div className='space-y-5'>
                            <div className='flex gap-4'>
                                <Input placeholder='Name' />
                                <Input placeholder='Email' />
                            </div>
                            <div className='flex gap-4'>
                                <Input placeholder='Website' />
                                <Input placeholder='Phone' />
                            </div>
                            <Input placeholder='Hello Iam Intrested in..' isTextArea={true} />
                            <CheckBox title='Save my name, email, and website in this browser for the next time I comment.' />

                            <Button title='Send Now' url='#' />

                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='md:w-[33.3%] md:pl-5'>
                    <div className='centerY justify-center h-14 bg-quaternary rounded-[10px]'>
                        <input placeholder='Search' className='outline-none w-[85%] text-primary border-0 bg-transparent' />
                        <BiSearch className='text-primary' size={25} />
                    </div>

                    {/* latest news */}
                    <div className='mb-5'>
                        <h1 className='text-xl font-dmSerif font-bold text-secondary my-5'>Latest News</h1>
                        {
                            latestData.map((item) => (
                                <div key={item.id} className='border-b-[1px] border-primary py-2'>
                                    <h1 className='text-[16px] font-dmSerif font-bold text-secondary w-[80%]'>{item.title}</h1>
                                    <p className='text-[14px] font-jost text-tertiary text-end pr-2'>{item.date}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* Categories */}
                    <div className='p-5 mb-5 bg-quaternary rounded-2xl'>
                        <h1 className='text-xl font-dmSerif font-bold text-secondary '>Categories</h1>
                        {
                            categories.map((item, idx) => (
                                <div key={idx} className='border-b-[1px] border-primary py-2'>

                                    <p className='text-[14px] font-jost text-tertiary'>{item}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* tags */}
                    <div>
                        <h1 className='text-xl font-dmSerif font-bold text-secondary '>Categories</h1>
                        <div className='flex gap-3 flex-wrap mt-3'>
                            {
                                tags.map((item, idx) => (
                                    <div key={idx} className=' py-2 px-5 bg-quaternary hover:bg-secondary  rounded-xl hover:text-white text-[14px] font-jost text-tertiary cursor-pointer'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
