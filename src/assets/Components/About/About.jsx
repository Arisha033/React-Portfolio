import React from 'react'
import ProfilePicture from '../../images/project-images/Arisha.jpg'

export const About = () => {
  return (
    <>
      <section className="flex flex-col w-full h-screen justify-center items-center bg-[#262525] text-white">
        <div className="flex flex-col items-center">
          <img
            src={ProfilePicture}
            alt="image loading"
            className="rounded-full h-60 w-60 border-white my-4"
          />
          <h4 className="text-2xl font-bold ml-3">Greetings! I am Arisha.</h4>
          <p className="text-gray flex flex-wrap justify-center px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure a
            nulla at totam neque aliquid rem unde iste animi nostrum quos, nobis
            velit dolorem alias ratione earum? Provident, accusamus.
            {/* A passionate and driven BTech student with a keen interest in
            Front End Web Development. Throughout my academic journey, I
            have relentlessly pursued knowledge and practical skills in the
            ever-evolving field of technology. This portfolio serves as a
            testament to my dedication, showcasing the projects, experiences,
            and achievements that have shaped my academic and professional
            identity. */}
          </p>
        </div>
      </section>
    </>
  )
}