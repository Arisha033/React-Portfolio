import React from 'react'
import projectData from './ProjectData'

export const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full h-full text-center bg-[#262525] text-white"
      >
        <h2>Implementation of my Tech Skills:</h2>
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 py-8">
          {projectData.map((projectData) => (
            <div className="text-center flex flex-col p-0 m-0">
              <img
                src={projectData.img}
                alt={`${projectData}-img`}
                className="w-80 h-40 my-6 mx-4"
              />
              <p className="">{projectData.desc}</p>
              <p>
                <a href={projectData.link_1} target="_blank">
                  Demo
                </a>
                <a href={projectData.link_2} target="_blank">
                  Code
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
