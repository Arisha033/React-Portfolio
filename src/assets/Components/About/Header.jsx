import React from "react";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars);

export const Header = (props) => {
  // toggle menu
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav
        className="flex justify-between items-center
     w-full h-20 px-4"
      >
        <div>
          <h1 className="text-3xl font-bold">Arisha.</h1>
        </div>
        <div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } sm:mt-32 sm:flex-col sm:flex-wrap sm:justify-center md:flex  md:flex-row md:mt-0 md:justify-between md:items-center`}
          >
            <li className="sm:py-2 md:mx-4 hover:font-semibold hover:text-xl">
              <a href="#about">About</a>
            </li>
            <li className="sm:py-2 md:mx-4 hover:font-semibold hover:text-xl">
              <a href="#technologies">Technologies</a>
            </li>
            <li className="sm:py-2 md:mx-4 hover:font-semibold hover:text-xl">
              <a href="#projects">Projects</a>
            </li>
            <li className="sm:py-2 md:mx-4 hover:font-semibold hover:text-xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon
            onClick={toggleNavBar}
            className={`block md:hidden hover:cursor-pointer`}
            icon="bars"
            size="2x"
          />
        </div>
      </nav>
    </>
  );
};
