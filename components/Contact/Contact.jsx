import React from "react";
import {contactData} from '../../constants/data'

function Contact() {
  return (
    <section id="Contact" className="container mx-auto w-full md:h-full bg-contact rounded my-4 md:my-8  p-4 md:p-8">
        <h2 className='h2 text-white'>Contact me</h2>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-white">Name</label>
                <input type="text" id="name" name="name" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" className="leading-7 text-sm text-white">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-white">Message</label>
                <textarea id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-accent border-0 py-2 px-8 focus:outline-none hover:bg-accent rounded md:text-md">Send me a message</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-white">{contactData[0].email}</p>
              <p className="leading-normal my-5">{contactData[1].address}</p>
              <p>{contactData[2].copyright}</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Contact;