import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaBitbucket, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
            <div className="">
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something tgether</p>
                <h1 className='py-4 text-gray-600'>Hi I am <span className='text-[#5651e5]'>Rownak Hayat</span> </h1>
                <h1 className='py-4 text-gray-600'>Frontend Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a frontend web developer in building expceptional digital experiences. Currently, I am focused on build responsive front-end applications while learning back-end technologies.</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover::scale-110 ease-in duration-300">
                      <FaLinkedin/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover::scale-110 ease-in duration-300">
                      <FaMailBulk/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover::scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover::scale-110 ease-in duration-300">
                      <FaBitbucket/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover::scale-110 ease-in duration-300">
                      <FaGithub/>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}
