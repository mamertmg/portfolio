import React from 'react'

function Projects() {
  return (
    <div className="max-w-4xl mx-auto h-screen  mt-12  bg-white antialiased text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-rose-600 font-semibold tracking-wide uppercase">Web developer</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Learning is always fun</p>
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
    </div>
  )
}

export default Projects