import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="flex justify-center items-center flex-col pl-2">
    <a href='https://github.com/mamertmg' className='w-6 h-6 md:h-8 md:w-8 rounded-full bg-white border-gray-400 transition-all duration-500 ease-in-out m-2 '>
      <BsGithub className='w-6 h-6 md:h-8 md:w-8 fill-gray-600 hover:fill-rose-600 '/>
    </a>
    <a href="https://www.linkedin.com/in/marquezalberto/" className='w-6 h-6  md:h-8 md:w-8 rounded-full bg-white border-gray-400 transition-all duration-500 ease-in-out m-2'>
      <BsLinkedin  className='w-6 h-6 md:h-8 md:w-8 fill-gray-600 hover:fill-rose-600 '/>
    </a>
  </div>
);

export default SocialMedia;