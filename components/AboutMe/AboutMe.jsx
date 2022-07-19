import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

function AboutMe() {

  return (
    <div id="about">
        <section>
          <img src="assets/images/dus.jpg" className="object-cover h-24 md:h-64 w-full rounded-xl" alt="Düsseldorf city" />
        </section>
        <section className=" dark:bg-gray-800 rounded-xl">
          <div className="px-2 md:px-6 mx-auto">
              <div className="items-center md:flex md:pt-10">
                  <div className="mt-8 md:mt-0 md:w-1/3">
                      <div className="flex items-center justify-center lg:justify-middle">
                          <div className="max-w-lg">
                              <img className="object-cover object-center w-full md:h-80 rounded-2xl shadow" src="/assets/images/me-and-fuet.jpg" alt="me with my dog Fuet"/>
                              <p className='italic'>This is me with my lovely Corgi Fuet.</p>
                              <p className='italic'>Living in Düsseldorf currently</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white md:w-2/3 rounded-2xl shadow m-6 md:m-4 p-2">
                        <h2 className="text-3xl leading-8 font-extrabold md:text-4xl py-1">Who I am</h2>
                        <div className="rounded justify-center overflow-hidden md:flex md:flex-row"> 
                          <div className="w-3/4 mx-auto block text-center md:flex md:flex-row rounded">
                            <div className="md:mx-2 w-full md:w-1/3 py-4 md:p-1">
                              <div className="md:p-4 h-20 w-20 md:h-32 md:w-32 mx-auto">
                                <img src="assets/icons/handshake.png" className='text-gray-200' ></img>
                              </div>
                              <div>
                                <h1 className="font-bold text-rose-600">Business Professional</h1>
                                <p className="font-normal text-gray-600 md:m-4">International career in B2B markets</p>            
                              </div>
                              <a href="/#business" className="text-gray-800 font-bold underline hover:bg-rose-600 hover:text-white transition ease-in duration-200 rounded-full p-2">Learn More</a>
                            </div>
                            <div className="md:mx-2 w-full md:w-1/3 py-4 md:p-1">
                              <div className="md:p-4 h-20 w-20 md:h-32 md:w-32 mx-auto">
                                  <img src="assets/icons/chemist.png"></img>
                              </div>
                              <div>
                                <h1 className="font-bold text-rose-600">Polymers Expert</h1>
                                <p className="font-normal text-gray-600 m-2 md:m-4">Expert in the plastics industry</p>            
                              </div>
                              <a href="/#polymers" className="text-gray-800 font-bold underline hover:bg-rose-600 hover:text-white transition ease-in duration-200 rounded-full p-2">Learn More</a>
                            </div>
                            <div className="md:mx-2 w-full md:w-1/3 py-4 md:p-1">
                              <div className="md:p-4 h-20 w-20 md:h-32 md:w-32 mx-auto">
                                  <img src="assets/icons/web-programming.png"></img>
                              </div>
                              <div>
                                  <h1 className="font-bold text-rose-600">Web Developer</h1>
                                  <p className="font-normal text-gray-600 m-2 md:m-4">Passionate full stack web developer</p>            
                              </div>
                                <a href="/#projects" className="text-gray-800 underline font-bold hover:bg-rose-600 hover:text-white transition ease-in duration-200 rounded-full p-2">Learn More</a>  
                              </div>    
                          </div>  
                        </div>
                  </div>
              </div>
          </div>
        </section>    
    </div>
  )
}

export default AppWrap(MotionWrap(AboutMe),'aboutme', 'bg-gray-200');