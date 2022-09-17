import React from "react";
import Image from 'next/image'
import {SocialMedia} from '../index'
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';

function Hero() {
  return (
      <section id="hero" className="container block md:flex md:flex-row mx-auto min-h-screen text-center py-2 sm:py-4 lg:py-12">
        <div className='lg:flex text-center md:text-left'>
          <div className='flex-1  mt-2'>
            <h3 className='text-[18px] md:text-xl font-semibold my-2'>
              Hola! I'm
            </h3>
            <h2 className='text-[24px] md:text-[32px] font-semibold text-accent my-4 lg:my-5'>
              Alberto Márquez
            </h2>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold my-6'>
              Full Stack <br />
              <span className='md:pl-[70px]'>Chemical Engineer</span>
              <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span>
            </h1>
            <p className='mb-[35px] text-lg md:text-xl text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ab. Harum, at? Molestiae, hic? Ipsum alias dolorum quam? Explicabo vitae natus aliquam eos praesentium at tempora aut aspernatur eaque porro.
            </p>
            <div className='mx-auto max-w-min md:m-0 relative z-10'>
              <SocialMedia />
            </div>
          </div>
        </div>
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="flex flex-col justify-center items-center my-10 mx-auto md:w-full"
        >
          <Image src='/assets/images/avatar.jpg' width={250} height={250} className="object-cover" alt="avatar"/>
        </motion.div>
      </section> 
  );
}

export default MotionWrap(Hero);