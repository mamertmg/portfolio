import React, { useState } from "react";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {AiOutlineMenu} from 'react-icons/ai'
import { navData } from '../../constants/data'

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="container mx-auto w-full">
      <div className="flex flex-row justify-right items-center">
        <ul className="md:flex md:flex-1 md:justify-end md:items-end list-none hidden">
          {navData.map((item) => (
            <li className="flex flex-row justify-center items-center pointer m-2" key={`link-${item.name}`}>
              <a className=" ease-in-out transition-all duration-300  hover:font-bold hover:text-accent" href={`#${item.name}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <AiOutlineMenu 
          className="w-10 h-10 md:hidden rounded-full bg-accent text-white p-2" 
          onClick={() => setToggle(true)}
        />
        {toggle && (
            <motion.div
              whileInView={{ x: [0, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="bg-body w-full block md:hidden fixed top-0 bottom-0 right-0 left-0 z-50"
            > 
              <div className="">
                <HiX
                  className="w-6 h-6 rounded-full text-accent"
                  onClick={() => setToggle(false)} />                
              </div>

              <ul className="grid grid-cols-1 align-middle">
                {navData.map((item) => (
                  <li key={item.name} className="flex flex-row justify-center py-4">
                    <a className="uppercase text-text hover:text-accent" href={`#${item.name}`} onClick={() => setToggle(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  );
}