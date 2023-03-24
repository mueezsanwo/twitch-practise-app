import React from 'react'
import LiveChannels from './LiveChannels'
import Categories from './Categories'
import Hero from './Hero'
import IconBar from './IconBar'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main