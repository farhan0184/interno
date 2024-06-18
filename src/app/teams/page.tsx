
import { SayAbout1, SayAbout2, SayAbout3, SayAbout4, SayAbout5, SayAbout6, SayAbout7, SayAbout8 } from '@/assets/images'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Facebook from '@/components/svg/Facebook'
import Linkedin from '@/components/svg/Linkedin'
import Twitter from '@/components/svg/Twitter'
import SingleTeam from '@/components/teams/SingleTeam'
import React from 'react'


export const teams = [
    {
        id: 1,
        name: 'Charlotte Levi',
        title: 'Design, Australia',
        img: SayAbout1,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
    {
        id: 2,
        name: 'Nattasha Julie',
        title: 'Design, Australia',
        img: SayAbout2,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.twitter.com/'
            },
            {
                icon: <Linkedin />,
                link: 'https://www.linkedin.com/'
            },
        ]
    },
    {
        id: 3,
        name: 'John Smith',
        title: 'Design, Australia',
        img: SayAbout3,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
    {
        id: 4,
        name: 'Nora Owen',
        title: 'Design, Australia',
        img: SayAbout4,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
    {
        id: 5,
        name: 'Sofia Carter',
        title: 'Design, Australia',
        img: SayAbout5,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
    {
        id: 6,
        name: 'Avery Jackson',
        title: 'Design, Australia',
        img: SayAbout6,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
    {
        id: 7,
        name: 'Luna	James',
        title: 'Design, Australia',
        img: SayAbout7,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
            {
                icon: <Linkedin />,
                link: 'https://www.linkedin.com/'
            },
        ]
    },
    {
        id: 8,
        name: 'Charlotte Levi',
        title: 'Design, Australia',
        img: SayAbout8,
        links: [
            {
                icon: <Facebook />,
                link: 'https://www.facebook.com/'
            },
            {
                icon: <Twitter />,
                link: 'https://www.x.com/'
            },
        ]
    },
]

export default function Teams() {

    const img = '/teams.jpg'

    
    return (
        <div>
            <AllHeader img={img} title='Our Professional' disc='Home / Our Team' />
            <Container isPadding={false} style='grid grid-cols- md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20'>

                {
                    teams.map((team) => {
                        const name = team.name.replace(' ', '')
                        .toLocaleLowerCase()
                        return (
                            <SingleTeam key={team.id} team={team} name={name} />
                        )
                    })
                }

            </Container>
        </div>
    )
}
