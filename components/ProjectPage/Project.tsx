
import React from 'react'
import propertyImg from '../../public/projectImg/property.jpg'
import cryptoImg from '../../public/projectImg/crypto.jpg'
import netflixImg from '../../public/projectImg/netflix.jpg'
import twitchImg from '../../public/projectImg/twitch.jpg'

import ProjectItems from '../ProjectItems/ProjectItems'



const Project = () => {
  return (
    <div id='projects' className='w-full'>
        <div  className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
            <h2 className='py-4'>What I have build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectItems 
               title='Property Finder' 
               backgroundImg={propertyImg}
               projectUrl='/property' />
               <ProjectItems 
               title='Property Finder' 
               backgroundImg={cryptoImg} 
               projectUrl='/property' />
               <ProjectItems 
               title='Property Finder' 
               backgroundImg={netflixImg} 
               projectUrl='/property' />
               <ProjectItems 
               title='Property Finder' 
               backgroundImg={twitchImg} 
               projectUrl='/property' />

            </div>
        </div>
    </div>
  )
}

export default Project