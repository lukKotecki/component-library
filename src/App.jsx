import React from 'react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Card from './components/Card/Card'
import CardTitle from './components/Card/CardTitle'
import Testimonials from './components/Testimonials/Testimonials'
import avatar from './assets/avatar-photo.jpg'
import Tooltip from './components/Tooltip/Tooltip.jsx'

export default function App(){



  return (
    <div className='app-container'>
      <Badge border='square'>Badge</Badge>
      <Badge color='red' border='pill'>Badge</Badge>
      <Badge color='purple'>Badge</Badge>
      <Badge color='yellow' border='square'>Badge</Badge>
      <Badge color='green' border='pill'>Badge</Badge>
      <Badge color='blue' border='square'>Badge</Badge>

      <Banner type='error'>
        Tytuł ERRRORA
        <BannerText>
          To jest errrrror
        </BannerText>
      </Banner>
      <Banner type='success'>
        Tytuł sukcesu
        <BannerText>
          UDAŁO SIĘ
        </BannerText>
      </Banner>
      <Banner type='warning'>
        Warning !
        <BannerText>
          To text warningu
        </BannerText>
      </Banner>
      <Banner>
        Taki tam neutral
        <BannerText>
          To text neutralny
        </BannerText>
      </Banner>
      <Banner>
        To jest mój Banner
      </Banner>
      <Banner type='error'>
        To jest mój ERROR!!
      </Banner>

      <Card>
        <CardTitle>
          To jest tytul długi ze ja pierdziele
        </CardTitle>
         jakis opis
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda corporis nulla adipisci illum. Illum, rerum ut. At beatae odit ad ullam porro, laborum sequi suscipit! Earum vel est accusantium!
         jakis opis
      </Card>
      <Testimonials 
        image={avatar}
        name='Lukas K'
        testimonial='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quos eum quibusdam quod quo dicta sit voluptate! Commodi unde adipisci culpa autem sequi voluptatibus fuga obcaecati nihil? Vero, voluptatum animi.'
        title='Frontend developer'
      />

      <Tooltip title='Gooood!'>
        KLIKNIJ
      </Tooltip>

      <Tooltip title='ukryta wiadomosc' color='blue' type='light'>
        Click here :)
      </Tooltip>

    </div>
    
  )
}

