import React from 'react';

const Header = () => {
  return (
    <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
      <a className="text-2xl font-bold" href="#">
        Photography Blog
      </a>
      <nav className="hidden md:flex gap-4">
        <a className="text-sm font-medium hover:underline" href="#">
          Home
        </a>
        <a className="text-sm font-medium hover:underline" href="#">
          Photography
        </a>
        <a className="text-sm font-medium hover:underline" href="#">
          Tutorials
        </a>
        <a className="text-sm font-medium hover:underline" href="#">
          About
        </a>
        <a className="text-sm font-medium hover:underline" href="#">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
