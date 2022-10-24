import Avatar from '../img/avatar.png';
import Logo from '../img/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import { actionType } from '../context/reducer';
import { app } from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Services', href: '/' }
];

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData }
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      });

      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
    }
  };

  return (
    <header className="fixed z-50 w-screen py-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
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

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              className="w-10 shadow-md rounded-full cursor-pointer"
              src={user ? user.photoURL : Avatar}
              alt="user"
              onClick={login}
            />
            <div className="flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0">
              {user && (
                <Link to='/create-item'>
                  <p className="user-menu hover:rounded-t-lg">
                    New Item
                    <MdAdd />
                  </p>
                </Link>
              )}
              <p className="user-menu hover:rounded-b-lg">
                Logout <MdLogout />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
