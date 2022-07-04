import React from 'react'

function Projects() {
  return (
    <div className="max-w-7xl mx-auto mt-12  bg-white antialiased text-center">
        <section className=" px-4 sm:px-6 md:px-8">
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
        </section>

        <section class="flex flex-wrap shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" src="/images/blog/1.jpg" class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Supercharged !
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-4">
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" src="/images/blog/1.jpg" class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Supercharged !
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-4">
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
            
        </section>

    </div>
  )
}

export default Projects