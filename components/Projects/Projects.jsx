import React from 'react'
import { MotionWrap } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="container mx-auto min-h-screen  py-2 sm:py-4 lg:py-12">   
        <h2 className="mt-6 text-3xl font-bold leading-tight text-right text-black sm:text-4xl lg:text-5xl border-solid border-b-2">Portfolio</h2>
        <div className="flex flex-wrap shadow-lg rounded-lg cursor-pointer m-auto">
            <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
            >
                <div class="py-10 sm:py-16 lg:py-24">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
                            <div class="md:px-4 lg:px-10">
                                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg" alt="" />
                                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Join as a team</h3>
                                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>

                            <div class="md:px-4 lg:px-10">
                                <img class="rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg" alt="" />
                                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Work from anywhere</h3>
                                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>

                            <div class="md:px-4 lg:px-10">
                                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg" alt="" />
                                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Get success</h3>
                                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default MotionWrap(Projects);