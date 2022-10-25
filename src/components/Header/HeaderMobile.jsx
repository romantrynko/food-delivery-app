import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdAdd, MdLogout } from 'react-icons/md';

const HeaderMobile = ({ Logo, user, Avatar, login, menu, links }) => {
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

            <ul className="flex flex-col px-4 gap-2">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="header-link">
                  {link.name}
                </li>
              ))}
            </ul>

            <p className="user-menu hover:rounded-b-lg">
              Logout <MdLogout />
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default HeaderMobile;
