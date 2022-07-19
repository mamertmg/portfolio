import React, {useState} from "react";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import {customers} from '../../constants/index'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Industries() {

  const brands = Object.values(customers)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="industries" className=" antialiased text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Industries and Customers</h2>
        <div class="text-gray-600 body-font">
          <div class="flex flex-col justify-center items-center py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-3xl">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/automotive-logo.png " alt="content"/>
                  <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">AUTOMOTIVE</h3>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-3xl">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/appliances-logo.png" alt="content"/>
                  <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">APPLIANCES</h3>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-3xl">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/e-e-logo.png" alt="content"/>
                  <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">ELECTRICAL AND ELECTRONICS</h3>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-3xl">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/industries/insulation-logo.png" alt="content"/>
                  <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">INSULATION</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
}

export default AppWrap(MotionWrap(Industries),'industries', 'bg-gray-200');