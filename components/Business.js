import React from 'react'
import Loader from 'react-loaders'

function Business() {
  return (
    <div className="max-w-7xl h-screen mx-auto mt-12 bg-white antialiased text-center">
        <div class="px-4 sm:px-6 md:px-8">
            <h2 class="text-base text-rose-600 font-semibold tracking-wide uppercase">Business Professional</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Strong technical background with international experience</p>
            <div className="flex flex-row w-10 mx-auto my-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className=" h-4 w-4 text-rose-600 mx-auto" 
              viewBox="0 0 512 512"
            >
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className=" h-4 w-4 text-rose-600 mx-auto" 
              viewBox="0 0 512 512"
            >
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
        </div>

          <div class="mt-10 pb-4 border-b-4">
            <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-600 text-white">

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Sales Manager</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-600 text-white">

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Account Management</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-600  text-white">

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Business Development</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-600  text-white">

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Cross-functional teams</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Business