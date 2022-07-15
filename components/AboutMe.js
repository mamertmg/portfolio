import React from 'react'

function AboutMe() {

  return (
    <div className="w-full md:h-screen" id="aboutme">
        <section>
          <img src="/images/dus.jpg" className="object-cover md:h-64 w-full" alt="Düsseldorf city" />
        </section>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
              <div class="items-center lg:flex">
                  <div class="mt-8 lg:mt-0 lg:w-1/2">
                      <div class="flex items-center justify-center lg:justify-middle">
                          <div class="max-w-lg">
                              <img class="object-cover object-center w-full h-64 rounded-md shadow" src="/images/me-and-fuet.jpg" alt="me with my dog Fuet"/>
                          </div>
                      </div>
                  </div>
                  <div class="lg:w-1/2">
                      <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Who I am</h2>
                      <p class="mt-4 text-gray-500 dark:text-gray-500 lg:max-w-md">
                          Hi I am Alberto, full stack chemical engineer , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
                      </p>
                  </div>
              </div>
          </div>
        </section>    
    </div>
  )
}

export default AboutMe