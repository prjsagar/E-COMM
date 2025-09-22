import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import React from 'react';

function Navigation() {
  return (
    <>
      <ul className="flex flex-col list-none sm:flex-row md:gap-6 relative z-20">
        <li className="text-white hover:text-black sm:py-2 px-5">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white hover:text-black sm:py-2 px-5">
          <Link href="/about">Bags</Link>
        </li>
        <li className="text-white hover:text-black sm:py-2 px-5">
          <Link href="/projects">Sneakers</Link>
        </li>
        <li className="text-white hover:text-black sm:py-2 px-5">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
export default function Navbar() {
  const price = 0;
  return (
    <>
      <div className="flex flex-col bg-white w-full p-5 sm:flex-row justify-between ">
        <div className="flex flex-row ">
          <img src="/assets/companyLogo.svg" alt="logo" />
          {/* <div className="text-black font-black text-1xl">E-Comm</div> */}
        </div>
        <nav className="content-center ">
          <ul className="flex flex-row justify-between items-center gap-15">
            <li className="hover:text-cyan-500 text-1xl">
              <Link href="/home" className="font-montserrat">
                HOME
              </Link>
            </li>
            <li className="hover:text-cyan-500 text-1xl">
              <Link href="/bags">BAGS</Link>
            </li>
            <li className="hover:text-cyan-500 text-1xl">
              <Link href="/sneakers">SNEAKERS</Link>
            </li>
            <li className="hover:text-cyan-500 text-1xl">
              <Link href="/belts">BELTS</Link>
            </li>
            <li className="hover:text-cyan-500 text-1xl">
              <Link href="/contact">CONTACTS</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center gap-4">
          <ShoppingCart size={20} />
          <Link href="/cart">
            <span>
              Items <span className="font-bold text-gray-500">${price}</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
