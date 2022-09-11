import React from 'react'
import {HiBeaker, HiCode, HiCurrencyEuro } from 'react-icons/hi';
import { MotionWrap } from '../../wrapper';

function AboutMe() {

  return (


    <section id="about me" className="container mx-auto min-h-screen py-2 sm:py-4 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What I can do for you</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
              <div className="transition-all duration-200 bg-white hover:shadow-xl">
                  <div className="py-10 px-9">
                    <HiCurrencyEuro className='w-16 h-16'/>
                      <h3 className="mt-8 text-lg font-semibold text-black">Business professional</h3>
                      <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
              </div>

              <div className="transition-all duration-200 bg-white hover:shadow-xl">
                  <div className="py-10 px-9">
                      <HiBeaker className='w-16 h-16'/>
                      <h3 className="mt-8 text-lg font-semibold text-black">Polymers expert</h3>
                      <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
              </div>

              <div className="transition-all duration-200 bg-white hover:shadow-xl">
                  <div className="py-10 px-9">
                      <HiCode className='w-16 h-16'/>
                      <h3 className="mt-8 text-lg font-semibold text-black">Web developer</h3>
                      <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

  )
}

export default MotionWrap(AboutMe);