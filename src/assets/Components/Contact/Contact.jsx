import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="w-full h-full text-center">
        <h2 className="font-semibold text-2xl">Get In Touch</h2>
        <form
          action="https://getfogrm.io/f/c00c843e-0cde-4551-bfda-d0ab3961ccb8"
          method="POST"
        >
          <input
            className="border-2 m-4 py-2 px-3 w-3/5 rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <br />
          <input
            className="border-2 m-4 py-2 px-3 w-3/5 rounded-lg"
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <br />
          <textarea
            className="border-2 m-4 py-2 px-3 w-3/5 rounded-lg"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <br />
          <button className="p-2 m-4 border-2 rounded-lg cursor-pointer">
            Send Message
          </button>
        </form>
        <div className="flex flex-row gap-8 justify-end mx-24 text-2xl p-2">
          <a href="mailto:arishaaa333@gmail.com" target="_blank">
            <IoIosMail />
          </a>
          <a href="https://github.com/Arisha033" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/arisha033/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </section>
      <footer className="text-center pb-4">
        Copyright@2024| Made with 🤍 by Arisha.
      </footer>
    </>
  );
};
