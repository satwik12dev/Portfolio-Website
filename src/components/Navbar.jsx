import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolledPercent);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hue = (scrollProgress * 3.6) % 360;
  const progressColor = `hsl(${hue}, 100%, 50%)`;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, ${progressColor}, #ffffff)`,
          boxShadow: `0 0 10px ${progressColor}`,
        }}
      ></div>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-11 h-11 object-contain drop-shadow-[0_0_10px_#00f7ff]"
            />
            <p className="text-white text-[20px] font-extrabold tracking-wide cursor-pointer hover:text-cyan-300 transition-colors duration-300">
              Satwik{" "}
              <span className="sm:block hidden font-light text-gray-300">
                | Full Stack Developer
              </span>
            </p>
          </Link>
          <span className="flex gap-4 ml-4">
            <a
              href="https://github.com/satwik12dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-cyan-300 transition duration-300 hover:drop-shadow-[0_0_8px_#00f7ff]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/satwik-12-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-blue-400 transition duration-300 hover:drop-shadow-[0_0_8px_#1DA1F2]"
            >
              <FaLinkedin />
            </a>
            <a
  href="/Resume2.pdf"
  download="Satwik_Resume.pdf"
  className="text-white text-xl hover:text-green-400 transition duration-300 hover:drop-shadow-[0_0_8px_#00ff7f]"
>
  <FaDownload />
</a>

          </span>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative group ${
                active === nav.title ? "text-cyan-300" : "text-gray-300"
              } hover:text-cyan-300 transition duration-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex-col gap-6 p-6 absolute top-20 right-4 min-w-[200px] rounded-xl
              bg-black/40 backdrop-blur-lg shadow-2xl border border-white/20 animate-fade-in`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-cyan-300" : "text-gray-300"
                  } hover:text-cyan-300 transition duration-300`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;