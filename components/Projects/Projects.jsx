import React from 'react'
import Image from 'next/image'
import { projectsData } from '../../constants/data';

function Projects() {
    return (
        <div id="Projects" className="container mx-auto py-4 md:py-8 md:h-full">
            <h2 className="h2 text-center text-title md:text-right mb-4 md:mb-8">My latest portfolio projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    {projectsData.map((item) => (
                        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto p-2">
                            <a href={item.link} class="w-full block h-full">
                                <Image alt={item.type} src={item.image} width="100%" height="50%" layout="responsive" objectFit="contain" />
                                <div class="bg-white dark:bg-contact w-full p-4">
                                    <p class="text-accent text-base md:text-md font-medium">
                                        {item.type}
                                    </p>
                                    <p class="text-title dark:text-white md:text-md mb-2">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        </div>                        
                    ))}
                </div>
            </div>
    )
}

export default Projects;