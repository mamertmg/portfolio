import React from "react";
import Image from 'next/image'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="container mx-auto md:h-screen py-4">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:max-w-lg lg:max-w-2xl">
            <h2 className="text-3xl font-bold leading-normal text-title sm:text-4xl lg:text-5xl lg:leading-tight">
                I am chemical engineer that &nbsp;
                <span className="relative inline-block">
                    <span className="absolute inline-block md:w-full h-2 bg-accent md:-bottom-1"></span>
                    <span> develops your websites </span>
                </span>
            </h2>
        </div>

        <div class="grid grid-cols-1 mt-8 md:mt-16 gap-y-6 md:grid-cols-2 gap-x-10">
          <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="flex flex-col justify-center items-center mx-auto md:w-full"
          >
            <Image src='/assets/images/avatar.jpg' width={300} height={300} className="object-cover to-transparent" alt="avatar"/>
          </motion.div>

          <div >
                <h3 class="text-base md:text-lg font-bold text-title text-bold">Hey, Welcome! I am Alberto Márquez, a full stack chemical engineer.</h3>
                <p class="mt-4 text-base md:text-lg text-title">Born in 1984 in Barcelona but living in Düsseldorf. I am a business professional working in the plastics/polymers industry with more than 14 years experience.</p>
                <p class="mt-4 text-base md:text-lg text-title">Chemical engineer as background, summed up with an MBA, I have been working for international organizations during my career and gathering vast experience in Sales, Marketing and Produt Development.</p>

                <h3 class="mt-8 text-base md:text-lg font-bold text-title">Why do I do now web development?</h3>
                <p class="mt-4 text-base md:text-lg text-title">Started as a hobby during pandemic times, the fast-paced environment keeps my mind hook up with new learnings every day.</p>
          </div>
        </div>
    </div>


    </section> 
  );
}

export default Hero;