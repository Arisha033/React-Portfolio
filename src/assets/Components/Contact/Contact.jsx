import React from 'react'

export const Contact = () => {
  return (
    <>
      <section className="w-full h-screen bg-[#262525] text-white">
        <h2>Get In Touch</h2>
        <form
          action="https://getform.io/f/c00c843e-0cde-4551-bfda-d0ab3961ccb8"
          method="POST"
        >
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <br />
          <input type="text" name="email" id="email" placeholder="Your Email" />
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <br />
          <button>Send Message</button>
          <div>
            <link href="mailto:arishaaa333@gmail.com" target="_blank"></link>
            <a href="https://github.com/Arisha033" target="_blank"></a>
            <a
              href="https://www.linkedin.com/in/arisha-555075241/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
              target="_blank"
            ></a>
            <a
              href="https://www.canva.com/design/DAF2aM4o7OU/pt_wkfenZWXNJ-4HCvagUA/view?utm_content=DAF2aM4o7OU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
              target="_blank"
            ></a>
          </div>
        </form>
      </section>
    </>
  )
}
