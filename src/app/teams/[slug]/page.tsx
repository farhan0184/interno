import { SingleTeamImg } from '@/assets/images'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Discription from '@/components/shares/Discription'
import RangeSlider from '@/components/shares/RangeSlider'
import Title from '@/components/shares/Title'
import TitleDisc from '@/components/shares/TitleDisc'
import Question from '@/components/team/Question'
import Image from 'next/image'
import React from 'react'
import SayAbouts from '@/components/aboutUs/SayAbouts'
import ContactUs from '@/components/aboutUs/ContactUs'
import SocialMediaAndLiks from '@/components/team/SocialMediaAndLiks'

const questions = [
  {
    id: 1,
    title: 'Website & Mobile App Design?',
    disc: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don&#39;t look even slightly believable.'
  },
  {
    id: 2,
    title: 'How to Easy Successful Projects?',
    disc: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don&#39;t look even slightly believable.'
  },
  {
    id: 3,
    title: 'International Trade Experience?',
    disc: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don&#39;t look even slightly believable.'
  },
]

export default function SingleTeamPage() {
  const img = '/singleteam.jpg'
  return (
    <div>
      <AllHeader img={img} title='Single Team' disc='Home / Teams / Single Team' />

      <Container isPadding={false} style='mt-20 '>
        {/* single detail section */}
        <div className='md:flex'>
          {/* left side */}
          <div className='md:w-[50%]'>
            <Image src={SingleTeamImg} alt="image" className='rounded-2xl w-full md:h-max h-[500px] object-cover' />

          </div>
          {/* right side */}
          <div className='md:w-[50%] py-8 md:pl-8 2xl:space-y-10 space-y-5'>
            <TitleDisc title='John Smith' disc='Designer' />

            <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don&#39;t look even slightly believable.' />

            <SocialMediaAndLiks/>


          </div>
        </div>
         {/* short biography */}
        <div className=' my-10 space-y-5'>
          <Title title='Short Biography​' />
          <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour, or randomised words which don&#39;t look even slightly believable.' />
          <Discription disc='Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.' />
        </div>

        {/* range slider and questions */}
        <div className='my-10 md:flex md:gap-10 md:space-y-0 space-y-5'>
          {/* left side- range slider */}
          <div className='space-y-3 md:w-[50%]'>
            <h1 className='text-xl font-bold font-dmSerif text-secondary'>Simplicity and Functionality</h1>
            <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.' />
            <Discription disc='There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour' />
            <div className='space-y-3'>
              <RangeSlider title='Project Design' min={0} max={100} val={50} />
              <RangeSlider title='Team Management' min={0} max={100} val={90} />
              <RangeSlider title='Client Satisfaction' min={0} max={100} val={70} />
            </div>
          </div>
          {/* right side - questions */}
          <div className='md:w-[50%] space-y-3'>
            <h1 className='text-xl font-bold font-dmSerif text-secondary'>Qustion And Answer</h1>
            <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.' />
            <div className='space-y-5'>
              {
                questions.map((item, idx) => (
                  <Question key={idx} item={item} />
                ))
              }
            </div>
          </div>
        </div>
      </Container>

      {/* say about us */}
      <div className='mt-10 mb-20 py-20 bg-quaternary'>
        <Container isPadding={false}>
          <div className='md:w-[60%] mx-auto text-center'>
            <Title title='What the People Thinks About Us' />
          </div>
          <SayAbouts />
        </Container>
      </div>

      {/* contact us */}
      <ContactUs title='Contact Us' isCheckBox={true} />

    </div>
  )
}
