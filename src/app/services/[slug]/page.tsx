import { VideoIcon, Video, LoveDesign } from '@/assets/images'
import ImgDetail from '@/components/aboutUs/ImgDetail'
import CompanyLogos from '@/components/home/CompanyLogos'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Counter from '@/components/shares/Counter'
import Title from '@/components/shares/Title'
import Image from 'next/image'
import React from 'react'

export default function SingleServices({ params }: { params: { slug: string } }) {
  const img = '/singleService.jpg'
  const slug = params.slug.replace('%20', " ")
  return (
    <div>
      <AllHeader img={img} title='Single Services' disc={`Home / Service / ${slug}`} />

      <Container isPadding={false}>
        <div className='md:mt-20 mt-10 md:mb-10  md:flex'>
          <div className='md:w-[45%] w-[95%] md:mx-0 mx-auto pr-5'>
            <Title title='We set the trends of modern living Services.' />
          </div>
          <div className='md:w-[55%] w-[95%] md:mx-0 mx-auto space-y-6 paragraph text-[16px] md:mt-0 mt-5  '>
            <p className='text-primary '>It is a long established fact that a reader will be distracted by the of readable content of a page</p>
            <p>when lookings at its layouts the points spriof using that it has a more
              less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
            <p>when lookings at its layouts the points spriof using that it has a more
              less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
          </div>
        </div>

        <CompanyLogos />

        <div className='md:my-10 relative'>
          <Image src={Video} alt='video' className='w-full rounded-[30px]' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80px] w-[50px] md:h-[80px] h-[50px] rounded-full bg-white centerY justify-center'>
            <Image src={VideoIcon} alt='icon' className='md:w-[30px] w-[20px] md:h-[30px] h-[20px] ml-1' />
          </div>
        </div>



        <div className='pt-10 sm:flex items-center justify-between w-[90%] mx-auto  sm:space-y-0 space-y-5'>
          <div className='paragraph text-[16px] space-y-5'>
            <Title title='Use of Interior' />
            <p><span  className='text-primary'>1.</span> We provide high quality design services.</p>
            <p><span  className='text-primary'>2.</span> Project on time and Latest Design.</p>
            <p><span  className='text-primary'>3.</span> Scientific Skills For getting a better result.</p>
            <p><span  className='text-primary'>4.</span> Renovations Benefit of Service</p>
            <p><span  className='text-primary'>5.</span> We are confident about our projects.</p>
          </div>
          <div className='sm:h-[200px] h-[3px] sm:w-[3px] w-[40%] mx-auto bg-gray-200'/>
          <div className='paragraph text-[16px] space-y-5'>
            <Title title='Make An Art' />
            <p><span className='text-primary'>1.</span> We provide high quality design services.</p>
            <p><span  className='text-primary'>2.</span> Project on time and Latest Design.</p>
            <p><span  className='text-primary'>3.</span> Scientific Skills For getting a better result.</p>
            <p><span  className='text-primary'>4.</span> Renovations Benefit of Service</p>
            <p><span  className='text-primary'>5.</span> We are confident about our projects.</p>
          </div>
        </div>
        <ImgDetail title='What We Do' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.' img={LoveDesign} style='md:my-20 my-10' detailStyle={'order-last pl-3'} />
      </Container>
      <Counter />
    </div>
  )
}
