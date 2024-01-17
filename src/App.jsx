import React from 'react'
import Badge from './components/Badge'
import Banner from './components/Banner'

export default function App(){
  return (
    <div className='app-container'>
      <Badge border='square'>Badge</Badge>
      <Badge color='red' border='pill'>Badge</Badge>
      <Badge color='purple'>Badge</Badge>
      <Badge color='yellow' border='square'>Badge</Badge>
      <Badge color='green' border='pill'>Badge</Badge>
      <Badge color='blue' border='square'>Badge</Badge>
      <Banner>To jest Banner</Banner>
    </div>
    
  )
}

