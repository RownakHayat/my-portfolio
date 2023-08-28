import Link from 'next/link';
import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaBitbucket, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'


const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2>Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left Side start */}
                    <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-1">
                        <div className="lg:p-4 h-full">
                            <div className="">
                                <img className='rounded-xl hover:scale-105 ease-in duration-100' src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className="py-10">
                                <h2 className='py-3'>Name Here</h2>
                                <p>Front-End Developer</p>
                                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="">
                                <p className='uppercase pt-8'>Contact With me</p>
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedin href='https://www.linkedin.com/in/rownak-hayat-427259246/' />
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaMailBulk />
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <BsFillPersonLinesFill />
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaBitbucket />
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Left Side end */}
                    {/* Right side */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form action="">
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className='uppercase text-sm py-2'>NAme</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                </div>
                                
                                    <div className="flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                                        <input type="email" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-2'>subject</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-2'>message</label>
                                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={20}/>
                                    </div>
                                    <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="justify-center py-12 flex">
                <Link href='/' >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiOutlineChevronDoubleUp  className="text-[#5651e5]" size={20}/>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;