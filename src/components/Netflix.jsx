import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

export default function Netflix() {
  return (
    <Card
    key={Sdata[0].id}
    imgsrc={Sdata[0].image}
    link={Sdata[0].url}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
  />
  )
}
