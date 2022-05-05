import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <>
      <header className="w-full fixed top-0 z-30 bg-amber-300/60 text-gray-800">
        <div className="mx-auto flex flex-wrap px-2 md:px-3 lg:px-4 py-3 items-center gap-2">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-800">
              <div className="relative w-8 h-10">
                <Image src="/logo.png" layout="fill" alt="logo" />
              </div>
              <span className="text-xl font-semibold tracking-wider ml-1">
                Visit Bukit Sutera
              </span>
            </a>
          </Link>
          <nav className="ml-auto mr-auto flex flex-wrap items-center text-base justify-center gap-x-3 gap-y-1">
            <Link href="/alumni/cari">
              <a className="hover:text-gray-900">Cari Alumni</a>
            </Link>
            <Link href="/berita">
              <a className="hover:text-gray-900">Berita</a>
            </Link>
            <Link href="/kata-mereka">
              <a className="hover:text-gray-900">Kata Mereka</a>
            </Link>
            <Link href="/donasi">
              <a className="hover:text-gray-900">Donasi Alumni</a>
            </Link>
          </nav>
          <div className="flex items-center justify-end w-full lg:w-auto">
            <Link href="/login">
              <a className="btn-pri px-2.5 py-0.5">Login</a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
