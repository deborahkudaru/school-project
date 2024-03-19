import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {
  return (
    <div className='bg-zinc-200 mx-auto flex w-full  items-center justify-between flex-wrap z-20 shadow-md p-4 fixed top-100'>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header