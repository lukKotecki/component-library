import React from 'react'
import Badge from './components/Badge'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Card from './components/Card/Card'
import CardTitle from './components/Card/CardTitle'

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
          To jest tytul długi ze ja pierdziele
        </CardTitle>
        To jest jakis opis
      </Card>

    </div>
    
  )
}

