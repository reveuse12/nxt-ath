"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white hover:uppercase font-bold text-xl underline decoration-white mb-2 md:mb-0">
          Prayag Bagthariya
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ">
          <li>
            <Link
              href="/"
              passHref
              className="text-white hover:uppercase hover:text-gray-300 hover:underline hover:decoration-white hover:font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              passHref
              className="text-white hover:uppercase hover:text-gray-300 hover:underline hover:decoration-white hover:font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              passHref
              className="text-white hover:uppercase hover:text-gray-300 hover:underline hover:decoration-white hover:font-semibold"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#"
              passHref
              className="text-white hover:uppercase hover:text-gray-300 hover:underline hover:decoration-white hover:scale-110 duration-300 "
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4 mt-2 md:mt-0 ">
          <Link
            href={"/signup"}
            className="bg-white shadow-lg hover:shadow-black text-black px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105"
          >
            Signup
          </Link>
          <Link
            href={"/login"}
            className="bg-white shadow-lg hover:shadow-black text-black px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
