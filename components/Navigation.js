'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainCategories = [
    { name: 'Trending', icon: '📈' },
    { name: 'Breaking', icon: '' },
    { name: 'New', icon: '' },
  ];

  const categories = [
    'Politics', 'Sports', 'Finance', 'Crypto', 'Geopolitics', 
    'Earnings', 'Tech', 'Culture', 'World', 'Economy', 'Elections', 'Mentions', 'More'
  ];

  return (
    <nav className="bg-[#1a2332] border-b border-[#2d3a4d] sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-[#2d3a4d]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
              </svg>
              <span className="text-lg font-semibold text-white">Polymarket</span>
              <span className="text-xl">🇮🇱</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search polymarket"
                  className="bg-[#2c3949] text-gray-300 text-sm px-4 py-2 pl-10 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
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
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-blue-400 text-sm flex items-center space-x-1 hover:text-blue-300">
                <span className="text-blue-500">ℹ</span>
                <span>How it works</span>
              </button>
              <button className="text-gray-300 text-sm hover:text-white">Log In</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md font-medium">
                Sign Up
              </button>
              <button className="text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-[#1a2332]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 h-12 overflow-x-auto scrollbar-hide">
            {mainCategories.map((cat) => (
              <Link
                key={cat.name}
                href={`/?category=${cat.name}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap flex items-center space-x-1"
              >
                {cat.icon && <span>{cat.icon}</span>}
                <span>{cat.name}</span>
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-700"></div>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/?category=${cat}`}
                className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2c3949] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...mainCategories, ...categories.map(name => ({ name }))].map((cat) => (
              <Link
                key={cat.name}
                href={`/?category=${cat.name}`}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

