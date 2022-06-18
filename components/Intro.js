import React from "react";

export default function Intro() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl">What I do</h1>        
      </div>

      <div className="rounded justify-center overflow-hidden m-2 md:flex md:flex-row p-4"> 
        <div className="w-3/4 mx-auto block text-center md:flex md:flex-row pt-4 rounded">
          <div className="mx-auto w-full md:w-1/3 p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
              <img src="assets/icons/handshake.png" className="" ></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-rose-600 my-2">
                Business Professional
              </h1>
              <p className="m-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>            
            </div>
            <a href="/business" className="text-gray-800 font-bold hover:bg-rose-600 hover:text-white rounded p-2">Know More</a>
          </div>
          <div className="mx-auto w-full md:w-1/3 p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
                <img src="assets/icons/chemist.png"></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-rose-600 my-2">
                Polymers Expertise
              </h1>
              <p className="m-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>            
            </div>
            <a href="/polymers" className="text-gray-800 font-bold hover:bg-rose-600 hover:text-white rounded p-2">Know More</a>
          </div>
          <div className="mx-auto w-full md:w-1/3 p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
                <img src="assets/icons/web-programming.png"></img>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-rose-600 my-2">
                  Full Stack Web Developer
                </h1>
                <p className="m-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>            
            </div>
              <a href="/projects" className="text-gray-800 font-bold hover:bg-rose-600 hover:text-white rounded p-2">Know More</a>  
          </div>    
        </div>  
      </div>
    </div>
  );
}