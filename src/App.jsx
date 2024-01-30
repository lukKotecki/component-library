import React from 'react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Card from './components/Card/Card'
import CardTitle from './components/Card/CardTitle'
import Testimonials from './components/Testimonials/Testimonials'
import avatar from './assets/avatar-photo.jpg'
import Tooltip from './components/Tooltip/Tooltip.jsx'
import Toast from './components/Toast/Toast.jsx'

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


      <Tooltip title='TO jest tytul' description='to jest moje zdjeceie'>
      <Testimonials 
        image={avatar}
        name='Lukas K'
        testimonial='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quos eum quibusdam quod quo dicta sit voluptate! Commodi unde adipisci culpa autem sequi voluptatibus fuga obcaecati nihil? Vero, voluptatum animi.'
        title='Frontend developer'
        />
        </Tooltip>

      <Tooltip title='Gooood!'description='To jest opis'>
        KLIKNIJ
      </Tooltip>
      <Tooltip title='Gooood!' color='light'>
        KLIKNIJ
      </Tooltip>

      <Tooltip title='NOTE' description='To jest opis' color='blue' type='light'>
        Click here :)
      </Tooltip>
      <Tooltip description='This is description' color='blue'>
        Click here :)
      </Tooltip>
      
      <Tooltip title='NOTE' description='This is description' color='purple' type='light'>
        Click here :)
      </Tooltip>
      <Tooltip title='NOTE' description='This is description' color='purple' >
        Click here :)
      </Tooltip>

      <Tooltip title='NOTE' description='This is description' color='green' type='light'>
        Click here :)
      </Tooltip>
      <Tooltip title='NOTE' description='This is description' color='green' >
        Click here :)
      </Tooltip>

      <Toast>To jest zawartosc toastu bardzo dluga i przynudnawa</Toast>
      <Toast type='success' description='to jest opis'>To jest zawartosc toastu</Toast>
      <Toast type='information' description='to jest opis bardzo dlugi i przynudnawy'>To jest zawartosc toastu</Toast>
      <Toast type='warning'>To jest zawartosc toastu</Toast>
      <Toast type='error'>To jest zawartosc toastu</Toast>


    </div>    
  )
}

