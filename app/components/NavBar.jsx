"use client";
import Link from "next/link";
import UseActiveSection from "../hooks/UseActiveSection";
import { FaCircle } from "react-icons/fa";

const NavBar = () => {
  const activeSection = UseActiveSection();
 
  return (
    <nav className="nav hidden lg:block text-lg">
      <ul className="mt-16 w-max">
        <li>
          <Link
            href="#about"
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "font-bold" : ""
            }`}
          >
            {activeSection === "about" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">OVER MIJ</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#education"
            className={`group flex items-center py-3 ${
              activeSection === "education" ? "font-bold" : ""
            }`}
          >
            {activeSection === "education" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">OPLEIDING</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#projects"
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "font-bold" : ""
            }`}
          >
            {activeSection === "projects" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">PROJECTEN</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#experience"
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "font-bold" : ""
            }`}
          >
            {activeSection === "experience" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">WERKERVARING</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#contact"
            className={`group flex items-center py-3 ${
              activeSection === "contact" ? "font-bold" : ""
            }`}
          >
            {activeSection === "contact" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
