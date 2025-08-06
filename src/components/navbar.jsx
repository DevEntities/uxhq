import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'

const navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Framework', href: '/framework' },
    { label: 'FAQs', href: '/faq' },
  ];



  // Define routes where you want to hide links and button
  const hideOnRoutes = ["/conversation", "/not-found"];
  const shouldHideExtras = hideOnRoutes.includes(location.pathname);

  // Check if current route is `/home` (or whatever page you want)
  const isSticky = location.pathname === "/conversation";



  return (
    <>
      {/* Navbar */}
      <nav className={`w-full max-md:h24 bg-gray500/50 h-24 fixedtop-0  z-50 flex items-center justify-between bg-gray300 py-16 px-5 md:px-8 bgtest-blue ${isSticky ? "relative top-0 py-0  h-[9vh] bg-gray400 " : ""}`}>


        {/* Logo */}
        <NavLink to={"/"} className={`flex items-center md:ml-2 z-50 ${isSticky ? "max-md:ml-4" : ""}`}>
          <img src="/assets/navbar/logo.png" alt="Logo" className="h-8 maxmd:h-6 w-auto" />
        </NavLink>




        {/* Desktop Nav Links */}


        {!shouldHideExtras && (
          <div className="flex-1 hidden ml-32 mt-4 bg-red400 md:flex justify-center">
            <ul className="flex space-x-14">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative font-dmsans text-[1.34rem] leading-[1.2] tracking-[0] z-50 text-center text-UXHQ-black transition ${isActive ? "font-semibold" : "font-normal"}`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative flex flex-col items-center group">
                        <span
                          className="absolute bottom-[0.15rem] left-0 h-2 bg-UXHQ-green w-0 group-hover:w-full transition-all duration-300 origin-left"
                        ></span>
                        <span className="relative z-10">{link.label}</span>
                      </span>
                    )}



                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}


        {!shouldHideExtras && (
          <div className="flex items-center space-x-2 md:space-x-4">

            <NavLink to={'/conversation'}>

              <button className="focus:outline-none focus:ring-0 group font-dmsans font-normal text-xl maxmd:text-[0.875rem] leading-[1.2] tracking-[0] text-UXHQ-white hover:text-UXHQ-black text-center flex items-center space-x-2 bg-UXHQ-black hover:bg-UXHQ-green px-7 py-3 maxmd:px-3 maxmd:py-[0.37rem] rounded-full shadow transition">

                {/* Fixed-size image wrapper */}
                <div className="relative max-sm:w-5 w-8 h-8 max-sm:h-5 flex-shrink-0">
                  {/* Default image */}
                  <img
                    src="/assets/navbar/navbtn.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                  />
                  {/* Hover image */}
                  <img
                    src="/assets/navbar/navbtn-hover.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>

                <p>Start your journey</p>
              </button>

            </NavLink>



            {/* Hamburger menu for mobile */}
            <button
              className="focus:outline-none focus:ring-0 flex flex-col justify-center items-center w-10 h-10 md:hidden z-50"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={`block w-7 h-1 bg-UXHQ-black transition-all duration-300 ${menuOpen ? 'rotate-[35deg] translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-1 bg-UXHQ-black my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-1 bg-UXHQ-black transition-all duration-300 ${menuOpen ? '-rotate-[35deg] -translate-y-2' : ''}`}></span>
            </button>
          </div>
        )}
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden  px-4 pt-24">
            {/* Semi-transparent black background */}
            <div
              className="absolute inset-0 bg-white/5"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu Content */}
            <div
              className="absolute top-24 left-1/2 -translate-x-1/2  w-[90%]  bg-UXHQ-black text-white rounded-xl p-8 z-50 space-y-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Links */}
              <ul className="flex flex-col items-start space-y-6">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.href}
                      className="font-dmsans text-white text-2xl"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="/na"
                  target='_blank'
                  aria-label="Instagram"
                >
                  <img src="/assets/navbar/Instagram.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-uxhq"
                  target="_blank"
                  aria-label="LinkedIn">
                  <img src="/assets/navbar/Linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        )}

      </nav>
    </>
  );
};

export default navbar;
