import React, { useState } from "react";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full p-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
            <a href="/">
              <h1 className="text-gray-800 font-bold">
                Alberto Márquez
              </h1>
              <p className="font-normal text-gray-600">
                Full Stack Chemical Engineer
              </p>
            </a>
        </div>
        <ul className="md:flex md:flex-1 md:justify-end md:items-end list-none hidden">
        {[ 'about', 'business', 'industries', 'polymers', 'projects', 'stack', 'contact'].map((item) => (
          <li className="flex flex-row justify-center items-center pointer m-2" key={`link-${item}`}>
            <a className="uppercase ease-in-out transition-all duration-300 text-gray-600 hover:font-bold hover:text-rose-600" href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
        <div >
          <HiMenuAlt4 
            className="w-8 h-8 relative flex  md:hidden rounded-full bg-rose-600 text-white"
            onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="relative top-0 left-0 bottom-0 right-0 bg-gray-200 px-5 py-5"
            >
              <HiX
                className="w-8 h-8 relative flex md:hidden rounded-full bg-rose-600 text-white" 
                onClick={() => setToggle(false)} />
              <ul className="">
                {['about', 'business', 'industries', 'polymers', 'projects','stack', 'contact'].map((item) => (
                  <li key={item}>
                    <a className=" uppercase transition-colors duration-200 transform text-gray-600 hover:font-bold hover:text-rose-600" href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>        
      </div>
    </nav>
  );
}