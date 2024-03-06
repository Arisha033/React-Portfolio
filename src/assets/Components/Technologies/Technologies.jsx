import React from "react";
import myTechnologies from "./TechData";

export const Technologies = () => {
  return (
    <>
      <section id="technologies" className="w-full h-full text-center">
        <h2 className="font-semibold text-3xl">Skills I persue:</h2>
        <div className="w-full grid justify-items-center gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-10">
          {myTechnologies.map((tech) => (
            <div key={tech.id} className="text-center w-40">
              <img
                src={tech.src}
                alt={`${tech.tech} logo`}
                className="rounded-full border-2 md:hover:rotate-12 md:hover:cursor-pointer"
              />
              <p className="p-2 font-semibold">{tech.tech.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
