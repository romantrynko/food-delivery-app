import Avatar from '../../img/avatar.png';
import Logo from '../../img/logo.png';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import { actionType } from '../../context/reducer';
import { app } from '../../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { motion } from 'framer-motion';
import { useStateValue } from '../../context/StateProvider';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

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

  const [menu, setMenu] = useState(false);

  const login = useCallback(async () => {
    console.log('login');
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
      setMenu(!menu);
    }
  }, [dispatch, firebaseAuth, menu, user]);

  const logout = useCallback(() => {
    setMenu(false);

    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  }, [dispatch]);

  return (
    <header className="fixed z-50 w-screen py-3 px-4 md:py-6 md:px-16">
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <HeaderDesktop
          {...{ Logo, links, user, Avatar, login, menu, logout }}
        />
      </div>

      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <HeaderMobile {...{ Logo, user, Avatar, login, menu, links, logout }} />
      </div>
    </header>
  );
};

export default Header;
