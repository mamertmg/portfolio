import React, {useState} from "react";

import { MotionWrap } from '../../wrapper';
import {stack} from '../../constants/index'

function TechStack() {

  const techSrc = Object.values(stack)  

  return (
    <div id="stack" className='container mx-auto md:h-screen text-center py-2 sm:py-4 lg:py-12'>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">My Tech Stack</h2>
        <div class="container w-full md:w-2/3 mx-auto justify-center flex flex-wrap md:mt-4">
              {techSrc.map(item =>(
                <div class="h-full flex items-center border-gray-200 border p-2 m-2 md:p-4 md:mt-12 rounded-lg">
                 <img alt="team" class="h-10 w-10 md:w-16 md:h-16 bg-gray-100 object-fit object-contain object-center flex-shrink-0 rounded-full" src={item.src}/>
                </div>
              ))} 
        </div>
    </div>
  )
}

export default MotionWrap(TechStack);