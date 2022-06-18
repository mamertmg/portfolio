import React from "react";


export default function Hero() {
  return (
    <div>
      <div className='bg-[url("../public/images/background.jpg")] h-50 md:h-screen w-full bg-cover bg-no-repeat bg-center px-12 py-8'>
        <h1 className="text-rose-600 text-3xl md:text-6xl text-center font-bold">Hello there, welcome to my website</h1>
      </div>
      <div className="w-3/4 md:w-1/2 mx-auto my-2 py-4"> 
          <h2 className="text-4xl font-bold text-center">This is me, nice to meet you!</h2>

          <img src='/images/avatar.jpg' className="rounded object-cover " alt="avatar"/>
      </div>      
    </div>
  );
}