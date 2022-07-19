import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

function AboutMe() {

  return (
    <div className="h-screen" id="aboutme">
        <section>
          <img src="assets/images/dus.jpg" className="object-cover md:h-64 w-full rounded-xl" alt="Düsseldorf city" />
        </section>
        <section className=" dark:bg-gray-800 rounded-xl">
          <div className="px-6 pt-24 mx-auto">
              <div className="items-center md:flex">
                  <div className="mt-8 md:mt-0 md:w-1/2">
                      <div className="flex items-center justify-center lg:justify-middle">
                          <div className="max-w-lg">
                              <img className="object-cover object-center w-full h-80 rounded-2xl shadow" src="/assets/images/me-and-fuet.jpg" alt="me with my dog Fuet"/>
                          </div>
                      </div>
                  </div>
                  <motion.div
                    whileInView={{ x: [500, 100], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                  >
                    <div className="bg-white md:w-1/2 rounded-2xl shadow p-2">
                        <h2 className="text-3xl leading-8 font-extrabold md:text-4xl py-1">Who I am</h2>
                        <p className="mt-4 text-gray-500 lg:max-w-md">
                            Hi!! This is me, a full stack chemical engineer. 
                            I am a spaniard from Barcelona currently living in Düsseldorf, Germany.
                        </p>
                    </div>
                  </motion.div>
              </div>
          </div>
        </section>    
    </div>
  )
}

export default AppWrap(MotionWrap(AboutMe),'aboutme', 'bg-gray-200');