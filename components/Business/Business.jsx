import React from 'react'

import {businessData} from '../../constants/data'

function Business() {
  return (
    <section id="Services" className="container mx-auto ">
      <h2 className="h2">How I'll Grow Your Business</h2>
      <div className="grid grid-cols-3 justify-center items-center">
        {businessData.map((item) => (
              <div className="transition-all duration-200 hover:shadow-xl" key={item.name}>
                  <div>
                      {item.icon}
                      <h3 className="mt-4 text-lg font-semibold text-black">{item.name}</h3>
                      <p className="mt-4 text-base">{item.description}</p>
                  </div>
              </div>
        ))}
      </div>
      <div class=" md:flex mx-auto items-center justify-center my-2">
        <button class="inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none  hover:bg-accent rounded text-lg">My Linkedin</button>
        <button class="ml-4 inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none  hover:bg-accent rounded text-lg">My Github</button>
      </div>
    </section>
  )
}

export default Business;