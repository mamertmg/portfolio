import React from "react";
import Image from 'next/image'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="container mx-auto md:h-screen py-4">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                I am chemical engineer that can &nbsp;
                <span class="relative inline-block">
                    <span class="absolute inline-block w-full h-2 bg-accent bottom-1.5"></span>
                    <span class="relative"> develop your websites </span>
                </span>
            </h2>
        </div>

        <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="flex flex-col justify-center items-center mx-auto md:w-full"
          >
            <Image src='/assets/images/avatar.jpg' width={300} height={300} className="object-cover to-transparent" alt="avatar"/>
          </motion.div>

          <div>
                <h3 class="text-lg font-bold text-black">Hey! I am Alberto, a full stack chemical engineer.</h3>
                <p class="mt-4 text-lg text-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p class="mt-4 text-lg text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <h3 class="mt-8 text-lg font-bold text-black">How do I do this without any investment?</h3>
                <p class="mt-4 text-lg text-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
    </div>


    </section> 
  );
}

export default Hero;