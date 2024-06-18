import Accordion from '@/components/faqs/Accordion'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Title from '@/components/shares/Title'
import { faqData } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

export default function FAQ() {
  return (
    <div>
      <AllHeader img='/faqimg.jpg' title='FAQ' disc='Home / FAQ' />

      <Container isPadding={false} style='mt-20 mb-10 space-y-16'>
        {
          faqData.map(item => (
            <div key={item.id} className=''>
              <Title title={item.title} style='text-center ' />
              <div className='md:flex mt-10 gap-10'>
                <div className={`md:w-[50%] ${item.style} flex flex-col justify-center`}>
                  <div>
                    {item.questions.map(question => (
                      <Accordion title={question.question} content={question.answer} />
                    ))}
                  </div>
                </div>
                <div className='md:w-[50%] '>
                  <Image src={item.img} alt='img' className='rounded-[30px]' />
                </div>
              </div>
            </div>
          ))
        }
      </Container>
    </div>
  )
}
