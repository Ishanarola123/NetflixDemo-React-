import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

export default function Amazon() {
  return (
    <Card
    key={Sdata[1].id}
    imgsrc={Sdata[1].image}
    link={Sdata[1].url}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
  />
  )
}
