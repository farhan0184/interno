import PlanItem from '@/components/plan/PlanItem'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import { title } from 'process'
import React from 'react'


const data =[
    {
        id: 1,
        title: 'Design advices',
        price: '29',
        isPopular: false,
        list: [
            'General living space advices',
            'Rennovation advices',
            "Interior design advices",
            "Furniture reorganization",
            "Up to 5 hours meetings"
        ]
    },
    {
        id: 2,
        title: 'Complete interior',
        price: '39',
        isPopular: true,
        list: [
            'Complete home redesign',
            'Interior and exterior works',
            "Modular interior planning",
            "Kitchen design",
            "Garages organization"
        ]
    },
    {
        id: 3,
        title: 'Furniture design',
        price: '49',
        isPopular: false,
        list: [
            'Furniture for living room',
            'Furniture refurbishment',
            "Sofas and amchairs",
            "Tables and chairs",
            "Kitchens"
        ]
    },

]

export default function Paln() {
    const img = '/plan.jpg'
  return (
    <div>
        <AllHeader img={img} title='Pricing & Plan' disc='Home / Priceing'/>

        <Container isPadding={false} style='grid lg:grid-cols-3 sm:grid-cols-2  mt-20 mb-10 gap-5'>
            {
                data.map(item => <PlanItem key={item.id} {...item} />)
            }
        </Container>
    </div>
  )
}
