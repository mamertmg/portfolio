import React from 'react'

function Polymers() {
  return (
        <div id="polymers" className="max-w-7xl w-full md:h-screen px-5 mt-12 mx-auto bg-white antialiased text-center">
          <div className="px-4 sm:px-6 md:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-rose-600 font-semibold tracking-wide uppercase">Polymers expert</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Passion for plastics</p>
              <div className="flex flex-row w-10 mx-auto my-4">
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
            </div>
          </div>
          <div className="flex flex-col pt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Termoplastics</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores”
              </p>
            </div>
  
            <div className=" flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray  md:w-1/3">
              <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Thermosets</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores”
              </p>
            </div>
  
            <div className=" flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="images/sustainability.jpg"  className="w-36 mx-auto rounded-full" alt="sustainability"/>
              <h5 className="text-lg font-bold">Sustainability</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores"
              </p>
            </div>
          </div>
        </div>
  )
}

export default Polymers