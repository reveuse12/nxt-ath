import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Prayag Bagthariya
        </div>
        <div className="text-center md:text-right ">
          Follow on <Link href="#" className="text-black font-semibold hover:underline hover:uppercase">Twitter</Link> and <Link href="#" className="hover:uppercase text-black font-semibold hover:underline">Facebook</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
