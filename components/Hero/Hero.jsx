import React from "react";
import Navbar from '../Navbar/Navbar.jsx'
import Image from 'next/image'
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer} from '../../constants/variants.js'

function Hero() {
  return (
    <section id="home" className="container mx-auto md:w-full md:h-screen pb-4">
      <Navbar/>
      <motion.div
            variants={staggerContainer(0.5, 1)}
            initial='hidden'
            whileInView={'show'}
            className="mx-auto md:w-full text-left max-w-5xl px-4  sm:px-6 lg:px-8"
        >
          <motion.div
                variants={fadeIn('down', 'tween', 0.2, 1.1)}
                className="flex flex-col justify-center items-center mx-auto "
          >
              <h2 className="text-3xl font-bold leading-normal text-title sm:text-4xl lg:text-5xl lg:leading-tight">
                  I am a chemical engineer that &nbsp;
                  <span className="relative inline-block">
                      <span className="absolute inline-block md:w-full h-2 bg-accent md:-bottom-1"></span>
                      <span> develops your websites </span>
                  </span>
              </h2>
              <div class="grid grid-cols-1 mt-8 md:mt-16 gap-y-6 md:grid-cols-2 gap-x-10">
                <Image src='/assets/images/avatar.jpg' width={300} height={300} className="object-cover to-transparent" alt="avatar"/>
                <div >
                      <h3 className="text-base md:text-lg font-bold text-title text-bold">Hey, Welcome to my page!</h3>
                      <h3 className="text-base md:text-lg font-bold text-title text-bold">I am Alberto Márquez, a full stack chemical engineer.</h3>
                      <p className="mt-4 text-base md:text-lg text-title">Born in 1984 in Barcelona but living in Düsseldorf. I am a business professional working in the plastics/polymers industry with more than 14 years experience.</p>
                      <p className="mt-4 text-base md:text-lg text-title">Chemical engineer as background, summed up with an MBA, I have been working for international organizations during my career and gathering vast experience in Sales, Marketing and Produt Development.</p>

                      <h3 className="mt-8 text-base md:text-lg font-bold text-title">Why do I do now web development?</h3>
                      <p className="mt-4 text-base md:text-lg text-title">Started as a hobby during pandemic times, the fast-paced environment keeps my mind hook up with new learnings every day.</p>
                </div>
              </div>
          </motion.div>
      </motion.div>
    </section> 
  );
}

export default Hero;