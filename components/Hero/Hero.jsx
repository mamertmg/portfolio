import React from "react";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

function Hero() {

  return (
      <section id="hero" className='bg-[url("../public/assets/images/background.jpg")] rounded-xl w-full h-screen bg-cover bg-no-repeat bg-center'>
        <div className="flex flex-row flex-wrap">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-start"
          >
            <div className="flex justify-center items-center bg-white rounded-2xl shadow mx-4 my-6 md:my-12 md:mx-24">
              <span className="text-4xl md:text-6xl m-2 p-2">👋</span>
              <div className="m-2 p-2">
                <p>Hello there, I am</p>
                <h1 className="font-bold text-2xl md:text-4xl text-gray-800">Alberto</h1>
              </div>
            </div>
          </motion.div>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="flex flex-col justify-center items-center my-10 mx-auto md:w-full"
          >
              <img src='assets/images/avatar.jpg' className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover" alt="avatar"/>
              <a 
                href="#aboutme" 
                className="w-3/4 md:w-1/5 md:my-4 my-4 py-4 px-6 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Learn more about me
              </a>
          </motion.div>
        </div>

      </section> 
  );
}

export default AppWrap(MotionWrap(Hero),'hero');