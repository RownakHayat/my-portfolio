import Image from 'next/image'
import React from 'react'
import html from '../../public/image/HTML5_Badge_512.png'
import bootstrap from '../../public/image/Bootstrap_logo.svg.png'
import css from '../../public/image/CSS3_logo_and_wordmark.svg.png'
import react from '../../public/image/React-icon.svg.png'
import tailwind from '../../public/image/tailwind-css-logo-vector.png'
import netlify from '../../public/image/Netlify_logo.svg.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <div className="">
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                    <h2>What I can Do</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                <Image 
                                        src={html}
                                        width={64}
                                        height={64}
                                        alt='/' 
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                <Image
                                        src={bootstrap}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>CSS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image
                                        src={css}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>Java Script</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                <Image
                                        src={react}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                <Image
                                        src={netlify}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                <Image
                                        src={tailwind}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>Tailwind</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills