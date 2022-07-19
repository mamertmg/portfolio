import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

function Business() {
  return (
    <div id="business" className="md:max-h-screen bg-white antialiased text-center">
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Skills and Experience</h2>
      <section className='flex w-full flex-wrap justify-evenly my-20'>
        <div className="flex justify-center items-center m-6">
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <img src='assets/images/kam.png' className='w-40 h-40 mx-auto' alt='Key Account Management' />
              <h2 className="font-bold" >Account Management</h2>
            </motion.div>
        </div>
        <div className="flex justify-center items-start m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/sales.png' className='w-40 h-40 mx-auto ' alt='Sales Development' />
            <h2 className="font-bold" >Sales Development</h2>
          </motion.div>
        </div>
        <div className="flex justify-center items-center m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/teams.png' className='w-40 h-40 mx-auto' alt='team player' />
            <h2 className="font-bold" >Multidisciplinary</h2>
          </motion.div>
        </div>
        <div className="flex justify-center items-start m-6">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src='assets/images/technical.png' className='w-40 h-40 mx-auto' alt='Technical Expertise' />
            <h2 className="font-bold" >Technical Expert</h2>
          </motion.div>
        </div>
      </section>
      <section className="flex w-full flex-wrap justify-evenly my-20">
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="md:flex"
        >
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <div className="flex flex-row m-6">
              <p className="text-left text-rose-600 font-bold mr-1">2020-2022</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left font-bold">Account Manager EMEA</h4>
                <a href="https://www.sabic.com/en">
                  <img className='w-24 h-24 object-contain' src="/assets/companies/sabic-logo.png" />                
                </a>
              </div>          
            </div> 
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <div className="flex flex-row m-6">
              <p className="text-left text-rose-600 font-bold mr-1">2014-2019</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left font-bold">Area Sales Manager</h4>
                <a href="https://www.kraussmaffei.com/en">
                  <img className='w-24 h-24 object-contain' src="/assets/companies/km-logo.png" />
                </a>
              </div>          
            </div> 
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <div className="flex flex-row m-6">
                <p className="text-left text-rose-600 font-bold mr-1">2013-2014</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left font-bold">Business Consultant</h4>
                <a href="https://altair.consulting/es/">
                  <img className='w-24 h-24 object-contain' src="/assets/companies/altair-logo.png" />
                </a>
              </div>          
            </div> 
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <div className="flex flex-row m-6">
                <p className="text-left text-rose-600 font-bold mr-1">2018-2013</p>
              <div className='flex flex-col justify-start items-start'>
                <h4 className="text-left font-bold">Technical Marketing Engineer</h4>
                <a href="https://www.basf.com/global/de.html">
                  <img className='w-24 h-24 object-contain' src="/assets/companies/basf-logo.png" />
                </a>
              </div>          
            </div>              
          </motion.div>
   
        </motion.div>
      </section>
    </div>
  )
}

export default AppWrap(MotionWrap(Business),'business');