import React from "react";

export default function Hero() {

  return (
      <section className='bg-[url("../public/images/background.jpg")] h-screen w-full bg-cover bg-no-repeat bg-center'>
        <h1 className="animate-fade-in-down text-rose-600 text-3xl md:text-6xl text-center font-bold ">Hello there, welcome to my website</h1>
        <div className="w-3/4 md:w-1/2 mx-auto my-8 py-2"> 
            <div className="w-2/3 mx-auto text-center">
              <img src='/images/avatar.jpg' className="rounded-full w-56 h-56 object-cover mx-auto" alt="avatar"/>
              <a 
                href="#aboutme" 
                class="py-4 px-6 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">Learn more</a>  
            </div>
        </div>   
      </section> 
  );
}