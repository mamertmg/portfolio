import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="antialiased text-center">

        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Learning is always fun</h2>
        <div className="flex flex-wrap shadow-lg rounded-lg cursor-pointer m-auto">
            <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
            >
                <div className="app__work-item flex justify-center items-center" key=''>
                    <div className="flex flex-row flew-wrap ">
                        <img className='w-40 h-40 object-contain' src='assets/projects/yelp-camp.png' alt='' />
                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__work-hover app__flex"
                        >
                            <a href='' target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                >
                                    <AiFillGithub />
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>
                    <div className="app__work-content app__flex">
                    <h4 className="bold-text">Yelp Camp</h4>
                    <p className="p-text" style={{ marginTop: 10 }}>Description</p>

                    <div className="app__work-tag app__flex">
                        <p className="p-text">EJS</p>
                    </div>
            </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default AppWrap(MotionWrap(Projects),'projects', 'bg-gray-200');