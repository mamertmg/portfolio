import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';

function Polymers() {
  return (
        <div id="polymers" className=" bg-white antialiased text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Passion for plastics</p>

          <section class="text-gray-600 body-font">
            <div class="container flex flex-row  justify-between">
              <div class=" flex">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 h-40 flex flex-col justify-between text-left rounded bg-gray-200">
                    <p>Polycarbonate</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PC</p>
                  </div>
                  <div class="w-1/2 h-40  flex flex-col justify-between text-left rounded bg-gray-200  ">
                    <p>Polybutylene terephthalate</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PBT</p>
                  </div>
                  <div class="w-full h-80 flex flex-col justify-between text-left rounded bg-gray-200  ">
                    <p>Polyurethane</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PUR</p>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full h-80  0 flex flex-col justify-between text-left rounded bg-gray-200  ">
                    <p>Polypropylene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>PP</p>
                  </div>
                  <div class="w-1/2 h-40  flex flex-col justify-between text-left rounded bg-gray-200  ">
                    <p>Acrylonitrile butadiene styrene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>ABS</p>
                  </div>
                  <div class="w-1/2 h-40  flex flex-col justify-between text-left rounded bg-gray-200   ">
                    <p>High-density polyethylene</p>
                    <p className='border-t-2 border-white text-2xl font-bold'>HDPE</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container flex flex-wrap">
                  <div class="flex w-full">
                    <div class="w-1/4 h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200  ">
                      <p>Polyoxymethylene</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>POM</p>
                    </div>
                    <div class="w-1/4 h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200  ">
                      <p>Polycarbonate / Acrylonitrile butadiene styrene</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/ABS</p>
                    </div>
                    <div class="w-1/4 h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200   ">
                      <p>Polycarbonate / Acrylonitrile styrene acrylate</p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/ASA</p>
                    </div>
                    <div class=" w-1/4 h-40 m-2 p-2 flex flex-col justify-between text-left rounded bg-gray-200   ">
                      <p>Polycarbonate / Polybutylene terephthalate </p>
                      <p className='border-t-2 border-white text-2xl font-bold'>PC/PBT</p>
                    </div>
                  </div>
              </div>
          </section>
        </div>
  )
}

export default AppWrap(MotionWrap(Polymers),'polymers');