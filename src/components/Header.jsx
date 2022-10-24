import React from 'react';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 py-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full " >Desktop</div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full ">Mobile</div>
    </div>
  );
};

export default Header;
