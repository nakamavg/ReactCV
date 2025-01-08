import React from 'react';
import { ReactSVG } from 'react-svg';
import emailIcon from '../assets/emailIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import profileImage from '../assets/dgomez-m.jpeg';

const Header = () => (
  <header className="flex flex-col md:flex-row items-center justify-center p-8 text-white relative shadow-lg">
    <div className="absolute top-5 left-5 flex gap-4">
      <a href="https://github.com/nakamavg" target="_blank" rel="noopener noreferrer">
        <ReactSVG src={githubIcon} className="w-8 h-8 transition-colors transition-transform duration-300 hover:text-yellow-400 hover:scale-110" />
      </a>
      <a href="mailto:aecm.davidgomez@gmail.com">
        <ReactSVG src={emailIcon} className="w-8 h-8 transition-colors transition-transform duration-300 hover:text-yellow-400 hover:scale-110" />
      </a>
    </div>
    <img
      src={profileImage}
      alt="Profile"
      className="w-48 h-48 rounded-full mb-4 md:mb-0 shadow-lg border-4 border-white"
    />
    <div className="text-center md:text-left md:ml-8">
      <h1 className="text-4xl font-bold m-0 text-yellow-400">David Gómez Martín</h1>
      <p className="m-0 text-lg text-yellow-300">C y C++ // Full stack dev</p>
    </div>
  </header>
);

export default Header;