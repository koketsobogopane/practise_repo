'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome, HiSearch } from 'react-icons/hi';
import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    //Header
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-900 p-6 ',
        className
      )}
    >
      {/* Header controls container */}
      <div className="w-full mb-4 flex items-center justify-between">
        {/* router reverse and foward controls: large screen only */}
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
        "
        >
          <button
            onClick={() => router.back()}
            className="
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                hover:opacity-75
                transition
            "
          >
            <RxCaretLeft className=" text-white " size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                hover:opacity-75
                transition
            "
          >
            <RxCaretRight className=" text-white " size={35} />
          </button>
        </div>
        {/* router search and home nav: Mobile view only */}
        <div className=" flex md:hidden gap-x-2 items-center ">
          <button
            onClick={() => router.push('/')}
            className=" flex items-center rounded-full p-2 bg-white justify-center hover:opacity-75 transition"
          >
            <HiHome className="text-black " size={23} />
          </button>
          <button
            onClick={() => router.push('/search')}
            className=" flex items-center rounded-full p-2 bg-white justify-center hover:opacity-75 transition"
          >
            <HiSearch className="text-black " size={23} />
          </button>
        </div>
        <div></div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign in
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="bg-white px-3 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
