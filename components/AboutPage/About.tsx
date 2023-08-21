import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4 uppercase'>who I Am</h2>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum voluptate molestias nesciunt, harum sed praesentium, ipsum aliquam minus repellat distinctio quisquam quod, ut nobis nulla. Amet temporibus autem ex.</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque architecto, numquam blanditiis mollitia tempora ipsa ullam consectetur tenetur quo ducimus. Consequuntur soluta sapiente vero nemo, culpa neque a sunt?</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit sed in quis. Voluptates voluptatibus deleniti in corrupti incidunt ipsam hic expedita officia excepturi pariatur laborum ratione, voluptas ea recusandae!</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check Out some of my latest project</p>
            </div>
            <div className="col-span-2 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
              <img className='rounded-xl' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About