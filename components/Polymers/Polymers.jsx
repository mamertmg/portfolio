import React from 'react'
import { MotionWrap } from '../../wrapper';

function Polymers() {
  return (
        <div id="polymers" className="container mx-auto min-h-screen  md:max-h-screen py-2">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-left text-black sm:text-4xl lg:text-5xl border-solid border-b-2">Polymers expertise</h2>
          <section className="text-gray-600 body-font mt-4">
            <div className="flex flex-wrap">
                <div className="flex flex-wrap w-1/2">
                  <a href="https://en.wikipedia.org/wiki/Polycarbonate" class="w-full md:w-1/3 h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200  hover:bg-orange-200">
                      <p>Polycarbonate</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC</p>
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Polybutylene_terephthalate" class="w-full md:w-1/4 h-24 md:h-40 m-2 p-2  flex flex-col justify-between text-left rounded bg-gray-200  hover:bg-green-200 ">
                    <p>Polybutylene terephthalate</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PBT</p>
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Polyurethane" class="w-full h-60 md:h-80 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200  hover:bg-blue-200 ">
                    <p>Polyurethane</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PUR</p>
                  </a>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <a href="https://en.wikipedia.org/wiki/Polypropylene" class="w-full h-60 md:h-80 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-yellow-200">
                    <p>Polypropylene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PP</p>
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene" class="w-full md:w-1/3 h-30 md:h-40 m-2 p-2  flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-red-200 ">
                    <p>Acrylonitrile butadiene styrene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>ABS</p>
                  </a>
                  <a href="https://en.wikipedia.org/wiki/High-density_polyethylene" class="w-full md:w-1/4 h-30 md:h-40 m-2 p-2  flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-indigo-200">
                    <p>High-density polyethylene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>HDPE</p>
                  </a>
                </div>
            </div>
            <div class="flex flex-wrap justify-center mx-auto">
                    <a href="https://en.wikipedia.org/wiki/Polyoxymethylene" class="w-1/2 md:w-1/5 md:h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-pink-200">
                      <p>Polyoxymethylene</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>POM</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Engineering_plastic" class="w-1/2 md:w-1/5 md:h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-purple-200">
                      <p>Polycarbonate / Acrylonitrile butadiene styrene</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/ABS</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Engineering_plastic" class="w-full md:w-1/5 md:h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-teal-200">
                      <p>Polycarbonate / Acrylonitrile styrene acrylate</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/ASA</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Engineering_plastic" class="w-full md:w-1/5 md:h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200 hover:bg-sky-200">
                      <p>Polycarbonate / Polybutylene terephthalate </p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/PBT</p>
                    </a>
              </div>
          </section>
        </div>
  )
}

export default MotionWrap(Polymers);