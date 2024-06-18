import React from 'react'
import TitleDisc from '../shares/TitleDisc'
import { image2, image3, image4, image5 } from '@/assets/images'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import SingleProject, { SingleProjectprops } from '../projects/SingleProject'

const data:SingleProjectprops[] = [
  {
    title: 'Modern Kitchan',
    disc: 'Decor / Artchitecture',
    img: image2,
    style: 'sm:rounded-tr-[15%]  '
  },
  {
    title: 'Modern Kitchan',
    disc: 'Decor / Artchitecture',
    img: image3,
    style: 'sm:rounded-tl-[15%] '
  },
  {
    title: 'Modern Kitchan',
    disc: 'Decor / Artchitecture',
    img: image4,
    style: 'sm:rounded-br-[15%]'
  },
  {
    title: 'Modern Kitchan',
    disc: 'Decor / Artchitecture',
    img: image5,
    style: 'sm:rounded-bl-[15%]'
  },
]

export default function OurProject() {
  return (
    <div  className='pt-10 pb-20'>
      <TitleDisc title='Follow Our Projects' disc='It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.' style='md:w-[70%] w-full mx-auto' titleStyle='text-center' discStyle='text-center mb-3' />
      <div className='mt-10 flex justify-between flex-wrap gap-y-10'>
        {
          data?.map((item, idx) => (
            <SingleProject key={idx} item={item} isHome={true}/>
          ))
        }
      </div>
    </div>
  )
}
