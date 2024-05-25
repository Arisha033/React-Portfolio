import React from "react";
import projectData from "./ProjectData";

export const Project = () => {
  return (
    <>
      <section id="projects" className="w-full h-full text-center">
        <h2 className="font-semibold text-2xl text-center">
          Some of my recent projects:
        </h2>
        <div className="grid text-center justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
          {projectData.map((projectData) => (
            <div className="text-center flex flex-col justify-items-center items-center border-2 rounded-xl px-4 m-4">
              <img
                key={projectData.id}
                src={projectData.img}
                alt={`${projectData}-img`}
                className="md:hover:duration-200 md:hover:scale-110 sm:w-60 lg:w-80 h-40 my-6 mx-4 border-2 rounded-md"
              />
              <p className=" text-gray-300 text-center w-80 pl-6">
                {projectData.desc}
              </p>
              <p className="flex gap-12 items-center justify-center py-3">
                <a
                  className="font-semibold text-lg hover:text-xl"
                  href={projectData.link_1}
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="font-semibold text-lg md:hover:text-xl"
                  href={projectData.link_2}
                  target="_blank"
                >
                  Code
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
