import React from "react";
import Image from 'next/image'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="container mx-auto h-screen block md:flex md:flew-row ">
        <div className='w-full md:w-1/2 my-auto md:flex-col items-start'>
            <h3 className='text-[18px] md:text-xl font-semibold'>
              Hola! I'm
            </h3>
            <h2 className='text-[24px] md:text-[32px] font-semibold text-accent'>
              Alberto Márquez
            </h2>
            <p className='mb-[35px] text-lg md:text-xl text-center lg:text-left'>
              
            </p>
        </div>
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="flex flex-col justify-center items-center mx-auto md:w-full"
        >
          <Image src='/assets/images/avatar.jpg' width={300} height={300} className="object-cover to-transparent" alt="avatar"/>
        </motion.div>
    </section> 
  );
}

export default Hero;