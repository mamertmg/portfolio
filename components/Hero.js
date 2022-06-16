import React from "react";

export default function Hero() {
  return (
    <div className=" bg-gray-200 justify-center overflow-hidden mx-auto my-2 md:flex md:flex-row p-4"> 

      <div className="w-full mx-auto md:w-1/3">
        <div className="w-full mx-auto ">
          <img src='/avatar.jpg' class="rounded" alt="avatar"/>
        </div>
      </div>
      <div className="w-full mx-auto md:w-2/3 flex flex-row p-4">
        <div className="w-full mx-auto md:w-1/3">
          <h1 className="text-3xl font-bold text-gray-600 my-2">
            Business Professional
          </h1>
        </div>
        <div className="w-full mx-auto md:w-1/3">
          <h1 className="text-3xl font-bold text-gray-600 my-2">
            Polymers expert
          </h1>
        </div>
        <div className="w-full mx-auto md:w-1/3">
          <h1 className="text-3xl font-bold text-gray-600 my-2">
            Full Stack Web developer
          </h1>
        </div>        
      </div>

    </div>
  );
}