import React from "react";
import { useState } from "react";
import ProfilePicture from "../../images/project-images/Arisha.jpg";

export const About = () => {
  // top button
  const [isTop, setIsTop] = useState(false);
  function showTop() {
    setIsTop(!isTop);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section
        id="about"
        className=" flex flex-col w-full h-screen justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <img
            src={ProfilePicture}
            alt="image loading"
            className=" rounded-full w-40 md:hover:cursor-pointer md:hover:w-52 my-2 border-2"
          />
          <h4 className=" text-2xl py-3 font-thin ml-3">
            Greetings! I am{" "}
            <span className=" text-4xl italic font-semibold ml-1">
              {" "}
              Arisha.
            </span>
          </h4>
          <p className=" text-gray-300 py-2 px-8 text-md text-center max-w-2xl">
            A passionate and driven B.Tech student with a keen interest in Front
            End Web Development. Throughout my academic journey, I have
            relentlessly pursued knowledge and practical skills in the
            ever-evolving field of technology. This portfolio serves as a
            testament to my dedication, showcasing the projects, experiences,
            and achievements that have shaped my academic and professional
            identity.
          </p>
        </div>
        <button
          onClick={showTop}
          className=" fixed border-2 py-2 px-4 rounded-xl right-0 mr-8 bottom-0 mb-6 hover:text-xl hover:shadow-2xl hover:shadow-slate-50"
        >
          Top
        </button>
      </section>
    </>
  );
};
