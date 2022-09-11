import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="justify-center items-center mx-auto block md:flex md:flex-row my-2">
    <button href='https://github.com/mamertmg' className='h-6 w-64 flex flex-row justify-center transition-all duration-500 ease-in-out m-4'>
      <h2>View my Github profile</h2>
      <BsGithub className='w-6 h-6 ml-4'/>
    </button>
    <a href="https://www.linkedin.com/in/marquezalberto/" className='h-6 w-64 justify-center flex flex-row transition-all duration-500 ease-in-out m-4'>
      <h2>View my Linkedin profile</h2>
      <BsLinkedin  className='w-6 h-6 ml-4'/>
    </a>
  </div>
);

export default SocialMedia;