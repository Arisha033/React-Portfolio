import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);

export const Header = (props) => {
  return (
    <>
    <nav className="flex justify-between items-center
     w-full h-20 px-4 text-white fixed bg-[#1f1e1e]">
        <div>
            <h1 className="text-3xl font-bold">Arisha.</h1>
        </div>
        <div>
           <ul className="flex flex-wrap items-center gap-4 justify-center">
            <li><a href="">About</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            </ul> 
        </div>
        <div>
            <FontAwesomeIcon icon="bars" size='2x'/>
        </div>
      </nav>
    </>
  )
}
