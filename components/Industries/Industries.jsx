import React, {useState} from "react";
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import {customers} from '../../constants/index'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Industries() {

  const brands = Object.values(customers)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="industries" className="container mx-auto min-h-screen text-center py-2 sm:py-4 lg:py-12">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Industries and Customers</h2>
          <div className="flex flex-row flex-wrap justify-center items-center py-2 md:py-12 mx-auto">
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="w-4/5 md:w-1/4 p-4 mx-auto "
              >
                  <div className="p-6 rounded-3xl">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/automotive-logo.png " alt="content"/>
                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">AUTOMOTIVE</h3>
                  </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="w-4/5 md:w-1/4 p-4 mx-auto"
              >
                <div className="p-6 rounded-3xl">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/appliances-logo.png" alt="content"/>
                  <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">APPLIANCES</h3>
                </div>
              </motion.div>
              <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className="w-4/5 md:w-1/4 p-4 mx-auto"
              >
                  <div className="p-6 rounded-3xl">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/e-e-logo.png" alt="content"/>
                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">ELECTRICAL AND ELECTRONICS</h3>
                  </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className="w-4/5 md:w-1/4 p-4 mx-auto"
                  >
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/insulation-logo.png" alt="content"/>
                  <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">INSULATION</h3>
                </div>
                </motion.div>
          </div>
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
        {brands.length && (
        <>
          <h3 className="font-bold my-1">Customers</h3>
          <div className="w-60 md:w-80 flex flex-wrap m-auto rounded-3xl shadow justify-center items-center bg-white">
            <img className="object-contain h-40 w-40" src={brands[currentIndex].src} />
          </div>
          <div className="flex justify-center items-center mt-6 mb-20">
            <div className="flex justify-center items-center p-2" onClick={() => handleClick(currentIndex === 0 ? brands.length - 1 : currentIndex - 1)}>
              <HiChevronLeft className="h-10 w-10 rounded-full bg-white text-rose-600 hover:text-white hover:bg-rose-600" />
            </div>
            <div className="flex justify-center items-center p-2" onClick={() => handleClick(currentIndex === brands.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight className="h-10 w-10 rounded-full bg-white text-rose-600 hover:text-white hover:bg-rose-600" />
            </div>
          </div>
        </>
      )}
      </motion.div>
    </section>
  );
}

export default MotionWrap(Industries);