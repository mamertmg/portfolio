import React from "react";
import { MotionWrap } from '../../wrapper';

function Contact() {
  return (
    <section id="contact" className="container mx-auto h-screen text-center sm:py-8 lg:py-12">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-left text-black sm:text-4xl lg:text-5xl border-solid border-b-2">Contact</h2>
        <div class="w-full max-w-2xl my-12 px-6 py-6 md:py-12 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Take a coffee and chat with me</h3>
          <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-2">
              <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span class="mt-2">+49 (176) 325 17693</span>
              </a>

              <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span class="mt-2">marquezgarcia@gmail.com</span>
              </a>
          </div>
          
          <div class="mt-6 ">
              <div class="items-center -mx-2 md:flex">
                  <div class="w-full mx-2">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                      <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-rose-300 dark:focus:border-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text"/>
                  </div>

                  <div class="w-full mx-2 mt-4 md:mt-0">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>
                      <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-rose-300 dark:focus:border-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email"/>
                  </div>
              </div>

              <div class="w-full mt-4">
                  <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                  <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 dark:focus:border-rose-300 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-40"></textarea>
              </div>

              <div class="flex justify-center mt-6">
                  <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-rose-700 focus:outline-none focus:bg-gray-600">Send Message</button>
              </div>
          </div>
      </div>
    </section>
  );
}

export default MotionWrap(Contact);