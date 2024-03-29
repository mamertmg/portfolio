import React, {useState} from "react";
import Image from 'next/image'
import { motion } from 'framer-motion';
import {customers} from '../../constants/index'
import { industryData } from "../../constants/data";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Industries() {

  const brands = Object.values(customers)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="Industries" className="container mx-auto md:h-[800px]  py-4 md:py-8">
        <h2 className="h2 text-center md:text-right">The industries and customers I have worked with</h2>
          <div className="flex flex-row flex-wrap justify-center items-center py-4 md:py-24 mx-auto">
            {industryData.map((item) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="w-4/5 md:w-1/4 mx-auto"
                key={item.name}
              >
                <div className="p-3 md:p-6 rounded-3x ">
                  <Image width="100%" height="50%" layout="responsive" objectFit="contain"  src={item.image} alt="content"/>
                  <h3 className="font-bold text-accent text-base md:text-md text-center mt-2">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 mt-4">
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className=" md:flex md:flex-col"
              >
            {brands.length && (
            <>
              <div className="w-60 md:w-80 flex flex-wrap m-auto rounded-3xl shadow justify-center items-center bg-white">
                <Image width="120%" height="120%"  objectFit="contain" src={brands[currentIndex].src} />
              </div>
              <h3 className="text-accent text-base md:text-xl text-center font-bold mt-2">Customers</h3>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center p-2" onClick={() => handleClick(currentIndex === 0 ? brands.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft className="h-8 w-8 rounded-full bg-white text-accent hover:text-white hover:bg-accent" />
                </div>
                <div className="flex justify-center items-center p-2" onClick={() => handleClick(currentIndex === brands.length - 1 ? 0 : currentIndex + 1)}>
                  <HiChevronRight className="h-8 w-8 rounded-full bg-white text-accent hover:text-white hover:bg-accent" />
                </div>
              </div>
            </>
            )}
          </motion.div>
          </div>


    </section>
  );
}

export default Industries;