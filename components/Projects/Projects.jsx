import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';

function Projects() {
  return (
    <div id="projects" className="antialiased text-center">

        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Learning is always fun</h2>


        <section className="flex flex-wrap shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <img alt="blog photo" src="/images/blog/1.jpg" className="max-h-40 w-full object-cover"/>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Supercharged !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                    </p>
                    <div className="flex flex-wrap justify-starts items-center mt-4">
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="w-full block h-full">
                <img alt="blog photo" src="/images/blog/1.jpg" className="max-h-40 w-full object-cover"/>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Supercharged !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                    </p>
                    <div className="flex flex-wrap justify-starts items-center mt-4">
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
            
        </section>

    </div>
  )
}

export default AppWrap(MotionWrap(Projects),'projects', 'bg-gray-200');