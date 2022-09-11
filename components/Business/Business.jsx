import React from 'react'
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';

function Business() {
  return (
    <section id="services" className="container mx-auto min-h-screen text-center py-2 sm:py-4 lg:py-12">
      <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Skills and Experience</h2>
      <div className='w-full md:flex flew-col md:flew-row md:flex-wrap justify-evenly my-4 md:my-20'>
        <div className="flex justify-center items-center my-4 md:my-6">
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <img src='assets/images/kam.png' className='w-20 h-20 md:w-40 md:h-40 mx-auto' alt='Key Account Management' />
              <div className='flex flex-col flex-wrap'>
                <h2 className="font-bold" >Account Management</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>

            </motion.div>
        </div>
        <div className="flex justify-center items-center my-4 md:m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/sales.png' className='w-20 h-20 md:w-40 md:h-40 mx-auto ' alt='Sales Development' />
            <h2 className="font-bold" >Sales Development</h2>
          </motion.div>
        </div>
        <div className="flex justify-center items-center my-4 md:m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/teams.png' className='w-20 h-20 md:w-40 md:h-40 mx-auto' alt='team player' />
            <h2 className="font-bold" >International Experience</h2>
          </motion.div>
        </div>
        <div className="flex justify-center items-start my-6 md:m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/technical.png' className='w-20 h-20 md:w-40 md:h-40 mx-auto' alt='Technical Expertise' />
            <h2 className="font-bold" >Technical Expert</h2>
          </motion.div>
        </div>
      </div>
      <section className="flex w-full flex-wrap justify-evenly my-20">
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="md:flex"
        >
            <div className="flex flex-row m-2 md:m-6">
              <p className="text-left w-20 text-rose-600 font-bold mr-1">2020 - 2022</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left text-sm font-bold">Account Manager EMEA</h4>
                <a href="https://www.sabic.com/en">
                  <img className='w-12 h-12 md:w-24 md:h-24 object-contain' src="/assets/companies/sabic-logo.png" />                
                </a>
              </div>          
            </div> 
            <div className="flex flex-row m-2 md:m-6">
              <p className="text-left w-20 text-rose-600 font-bold mr-1">2014 - 2019</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left text-sm font-bold">Area Sales Manager</h4>
                <a href="https://www.kraussmaffei.com/en">
                  <img className='w-12 h-12 md:w-24 md:h-24 object-contain' src="/assets/companies/km-logo.png" />
                </a>
              </div>          
            </div> 
            <div className="flex flex-row m-2 md:m-6">
                <p className="text-left w-20 text-rose-600 font-bold mr-1">2013 - 2014</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left text-sm font-bold">Business Consultant</h4>
                <a href="https://altair.consulting/es/">
                  <img className='w-12 h-12 md:w-24 md:h-24 object-contain' src="/assets/companies/altair-logo.png" />
                </a>
              </div>          
            </div> 
            <div className="flex flex-row m-2 md:m-6">
                <p className="text-left w-20 text-rose-600 font-bold mr-1">2018 - 2013</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left text-sm font-bold">Technical Marketing Engineer</h4>
                <a href="https://www.basf.com/global/de.html">
                  <img className='w-12 h-12 md:w-24 md:h-24 object-contain' src="/assets/companies/basf-logo.png" />
                </a>
              </div>          
            </div>              
   
        </motion.div>
      </section>
    </section>
  )
}

export default MotionWrap(Business);