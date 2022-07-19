import React from "react";
import { AppWrap, MotionWrap } from '../../wrapper';

function Intro() {

  return (
    <div id="intro" className=" antialiased text-center">
      <h1 className="text-center text-2xl md:text-4xl font-semibold">What I offer</h1>     

      <div className="rounded justify-center overflow-hidden md:flex md:flex-row my-4"> 
        <div className="w-3/4 mx-auto block text-center md:flex md:flex-row rounded">
          <div className="mx-auto w-full md:w-1/3 py-4 md:p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
              <img src="assets/icons/handshake.png" ></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-rose-600 my-2">
                Business Professional
              </h1>
              <p className="m-4">International career in multinational companies for B2B industries</p>            
            </div>
            <a href="/#business" className="text-gray-800 font-bold underline hover:bg-rose-600 hover:text-white rounded p-2">Learn More</a>
          </div>
          <div className="mx-auto w-full md:w-1/3 py-4 md:p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
                <img src="assets/icons/chemist.png"></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-rose-600 my-2">
                Polymers Expert
              </h1>
              <p className="m-4">Chemical engineer with proven background in the plastics / polymers industry</p>            
            </div>
            <a href="/#polymers" className="text-gray-800 font-bold underline hover:bg-rose-600 hover:text-white rounded p-2">Learn More</a>
          </div>
          <div className="mx-auto w-full md:w-1/3 py-4 md:p-1">
            <div className="md:p-4  h-20 w-20 md:h-32 md:w-32 mx-auto">
                <img src="assets/icons/web-programming.png"></img>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-rose-600 my-2">
                  Web Developer
                </h1>
                <p className="m-4">Passionate coder of the MERN Stack (MongoDB, Express, React, NodeJS)</p>            
            </div>
              <a href="/#projects" className="text-gray-800 underline font-bold hover:bg-rose-600 hover:text-white rounded-full p-2">Learn More</a>  
          </div>    
        </div>  
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Intro),'intro');