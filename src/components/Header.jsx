import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingCart } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Services', href: '/' }
];

const Header = () => {
  return (
    <header className="fixed z-50 w-screen py-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <Link to='/' className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-8 object-cover"
          />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li
                key={link.name}
                className="header-link">
                {link.name}
              </li>
            ))}
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute bottom-3 left-3 opacity-80 flex items-center justify-center w-5 h-5 rounded-full bg-cartNumBg ">
              <p className="text-xs text-white font-semibold">5</p>
            </div>
          </div>

          <motion.img
            whileTap={{scale: 0.8}}
            className="w-10 shadow-md rounded-full cursor-pointer"
            src={Avatar}
            alt="user"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
