import React from "react";
import myTechnologies from "./TechData";

export const Technologies = () => {
  return (
    <>
      <section id="technologies" className="w-full h-full text-center my-12">
        <h2 className="font-semibold text-3xl">Skills I persue:</h2>
        <div className="w-full grid justify-items-center gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-center my-16">
          {myTechnologies.map((tech) => (
            <div key={tech.id} className="text-center w-40">
              <img
                src={tech.src}
                alt={`${tech.tech} logo`}
                className="rounded-full border-2 hover:rotate-12 hover:cursor-pointer"
              />
              <p className="p-2 font-semibold">{tech.tech.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
