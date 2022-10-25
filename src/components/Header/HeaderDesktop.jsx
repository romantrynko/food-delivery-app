import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdAdd, MdLogout, MdShoppingCart } from 'react-icons/md';

const HeaderDesktop = ({ Logo, links, user, Avatar, login, menu, logout }) => {
  return (
    <>
      <Link
        to="/"
        className="flex items-center gap-2">
        <img
          src={Logo}
          alt="logo"
          className="w-8 object-cover"
        />
        <p className="text-headingColor text-xl font-bold">City</p>
      </Link>

      <div className="flex items-center gap-8">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8">
          {links.map((link) => (
            <li
              key={link.name}
              className="header-link">
              {link.name}
            </li>
          ))}
        </motion.ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute bottom-3 left-3 opacity-80 flex items-center justify-center w-5 h-5 rounded-full bg-cartNumBg ">
            <p className="text-xs text-white font-semibold">5</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.9 }}
            className="w-10 shadow-md rounded-full cursor-pointer"
            src={user ? user.photoURL : Avatar}
            alt="user"
            onClick={login}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0">
              {user && (
                <Link to="/create-item">
                  <p className="user-menu hover:rounded-t-lg">
                    New Item
                    <MdAdd />
                  </p>
                </Link>
              )}
              <p
                onClick={logout}
                className="user-menu hover:rounded-b-lg">
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop