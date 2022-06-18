import React from "react";

export default function Hero() {

  return (
    <div>
      <div className='bg-[url("../public/images/background.jpg")] h-100vh md:h-screen w-full bg-cover bg-no-repeat bg-center px-12 py-8'>
        <h1 className="animate-fade-in-down text-rose-600 text-3xl md:mt-72 md:mx-24 md:text-6xl text-center font-bold ">Hello there, welcome to my website</h1>
      </div>
      <div className="w-3/4 md:w-1/2 mx-auto my-2 py-4"> 
          <h2 className="text-3xl md:text-4xl font-semibold text-center">This is me, nice to meet you!</h2>
          <div className="flex flex-row w-10 mx-auto my-4 ">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className=" h-4 w-4 text-rose-600 mx-auto" 
              viewBox="0 0 512 512"
            >
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className=" h-4 w-4 text-rose-600 mx-auto" 
              viewBox="0 0 512 512"
            >
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
          </div>
          <div className="w-2/3 mx-auto">
            <img src='/images/avatar.jpg' className="rounded object-cover " alt="avatar"/>  
            <p class="mt-4 max-w-2xl text-xl text-gray-600 text-center md:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>          
          </div>

      </div>      
    </div>
  );
}