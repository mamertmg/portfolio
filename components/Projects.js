import React from 'react'

function Projects() {
  return (
    <div className="max-w-7xl mx-auto h-screen  mt-12  bg-white antialiased text-center">
        <div className=" px-4 sm:px-6 md:px-8">
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


            <div class="mx-auto container py-8">
                <div class="flex flex-wrap items-center lg:justify-between justify-center">
                    <div tabindex="0" class="mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                        <div class="bg-gray-200">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">Github</h2>
                                </div>
                                <p tabindex="0" class=" text-xs text-gray-600 mt-2">Description</p>
                                <div class="flex mt-4">
                                    <div>
                                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">React</p>
                                    </div>
                                    <div class="pl-2">
                                        <p tabindex="0" class="text-xs text-gray-600 px-2 bg-gray-200 py-1">MongoDB</p>
                                    </div>
                                </div>
                                <div class="flex items-center py-4">
                                    <a href="" class=" text-rose-600 text-xs font-semibold">Check it out in Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
      </div>
    </div>
  )
}

export default Projects