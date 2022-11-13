import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Projects() {
  return (
        <div id="Projects" className="container mx-auto md:h-screen">
            <h2 className="h2 text-right">Latest portfolio projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full">
                            <img alt="blog photo" src="assets/projects/yelp-camp.png" class="max-h-40 w-full object-cover"/>
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                    Video
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    Work at home
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    Work at home, remote, is the new age of the job, every person can work at home....
                                </p>
                            </div>
                        </a>
                    </div>


                </div>
            </div>

  )
}

export default Projects;