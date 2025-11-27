import { useState } from "react";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  isSearchOpen,
  setIsSearchOpen,
  isCartOpen,
  setIsCartOpen,
}) => {
  

  return (
    <>
      <header className="relative">
        
        <div className="hidden lg:block bg-white shadow-md fixed  left-0 right-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" className="block">
                  <img
                    src="/images/icons/logo-01.png"
                    alt="Cloth Craft"
                    className="h-9 w-auto"
                  />
                </a>
              </div>

              {/* Navigation Menu */}
              <nav className="flex items-center space-x-16">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Shop
                </a>
                
               
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Contact
                </a>
              </nav>

              {/* Header Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-indigo-600 transition-colors p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <button className="text-gray-700 hover:text-indigo-600 transition-colors p-2 relative">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>

                <button className="text-gray-700 hover:text-indigo-600 transition-colors p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3 flex items-center justify-between">
            
            <div className="flex-1">
              <a href="#" className="block">
                <img
                  src="/images/icons/logo-01.png"
                  alt="Cloth Craft"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors p-2 relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="text-gray-700 hover:text-indigo-600 transition-colors p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="border-t border-gray-200">
              
              <nav className="bg-indigo-600 text-white">
                <a
                  href="#"
                  className="block px-4 py-3 hover:bg-indigo-700 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 hover:bg-indigo-700 transition-colors"
                >
                  Shop
                </a>
                
                <a
                  href="#"
                  className="block px-4 py-3 hover:bg-indigo-700 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 hover:bg-indigo-700 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
