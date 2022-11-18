import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillCodeSandboxCircle } from 'react-icons/ai';


import {businessData} from '../../constants/data'

function Business() {
  return (
    <section id="Services" className="container mx-auto  py-4 md:py-8">
      <h2 className="h2 text-center md:text-left">How I'll Grow Your Business</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center py-4 md:py-12 mx-auto ">
        {businessData.map((item) => (
              <div className="transition-all duration-200 hover:shadow-xl py-2 my-2 px-4 rounded" key={item.name}>
                  <div>
                      {item.icon}
                      <h3 className="mt-4 text-base md:text-lg font-bold text-title">{item.name}</h3>
                      <p className="mt-4 text-base md:text-lg text-text">{item.description}</p>
                  </div>
              </div>
        ))}
      </div>
      <div className="flex flex-row mx-auto items-center justify-center my-2">
        <a href='https://www.linkedin.com/in/marquezalberto/' className="inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none  hover:bg-accent rounded text-base md:text-lg">My Linkedin <span className='flex my-auto ml-2'><AiFillLinkedin/></span></a>
        <a href="https://github.com/mamertmg" className="ml-4 inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none  hover:bg-accent rounded text-base md:text-lg">My Github <span className='flex my-auto ml-2'><AiFillGithub/></span></a>
      </div>
    </section>
  )
}

export default Business;