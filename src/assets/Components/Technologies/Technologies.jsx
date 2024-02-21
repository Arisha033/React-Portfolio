import React from "react";
import myTechnologies from "./TechData";

export const Technologies = () => {
  return (
    <>
      <section id="technologies" className="w-full h-full text-center">
        <h2>Some of my Tech Skills:</h2>
        <div className="w-full grid justify-items-center grid-cols-2 gap-8 sm:grid-cols-3 text-center my-8">
          {myTechnologies.map((tech) => (
            <div key={tech.index} className="text-center w-40">
              <img
                src={tech.src}
                alt={`${tech.tech} logo`}
                className="rounded-full border-2"
              />
              <p className="p-2 font-semibold">{tech.tech.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
