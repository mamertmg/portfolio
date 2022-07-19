import React from "react";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

function Hero() {

  return (
      <section id="hero" className='bg-[url("../public/assets/images/background.jpg")] w-full bg-cover bg-no-repeat bg-center'>
        <div className="flex flex-row">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-start h-screen"
          >
          <div className="flex justify-center items-center bg-white rounded-2xl shadow p-2">
              <span className="text-4xl m-2">👋</span>
              <div className="m-2">
                <p>Hello there, I am</p>
                <h1 className="font-bold text-2xl text-gray-800">Alberto</h1>
              </div>
            </div>
          </motion.div>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="flex flex-col relative top-100 left-50 justify-start items-start h-screen"
          >
              <img src='assets/images/avatar.jpg' className="rounded-full w-56 h-56 object-cover" alt="avatar"/>
              <a 
                href="#aboutme" 
                className="py-4 px-6 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Learn more about me
              </a>
          </motion.div>
        </div>

      </section> 
  );
}

export default AppWrap(MotionWrap(Hero),'hero');