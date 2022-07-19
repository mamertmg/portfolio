import React from "react";
import { FcPhoneAndroid,FcAddressBook } from "react-icons/fc";
import { AppWrap, MotionWrap } from '../../wrapper';

function Contact() {
  return (
    <section id="contact" className="antialiased text-center flex flex-col">
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <FcAddressBook/>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          
          <a href="mailto:hello@micael.com" className="p-text">marquezgarcia.a@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <FcPhoneAndroid/>
          <a href="tel:+49 (176) 325 17693" className="p-text">+49 (176) 325 17693</a>
        </div>
      </div>
        <div className="app__footer-form flex justify-center items-center">
          <div className="flex justify-center items-center">
            <input className="p-text" type="text" placeholder="Your Name" name="username" />
          </div>
          <div className="flex justify-center items-center">
            <input className="p-text" type="email" placeholder="Your Email" name="email"/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text">Send</button>
        </div>
    </section>
  );
}

export default AppWrap(MotionWrap(Contact),'contact', 'bg-gray-200');