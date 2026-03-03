"use client";
import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: '/login' },
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!search.trim()) return;
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo with Glow Effect */}
        <Link
          href="/"
          className="relative group flex items-center gap-2"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
          <span className="relative text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            SoundPulse
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Enhanced Search Bar */}
        <div className={`hidden md:block flex-1 max-w-md mx-8 transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 ${isSearchFocused ? 'opacity-50' : ''}`}></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search AirBuds..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-neutral-900/80 border border-neutral-700 text-white placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 shadow-inner"
              />
              <MagnifyingGlassIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isSearchFocused ? 'text-purple-400' : 'text-neutral-500'}`} />
              
              {/* Search Shortcut Hint */}
              <kbd className="hidden lg:block absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 text-xs font-mono text-neutral-600 bg-neutral-800 rounded border border-neutral-700">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive 
                      ? 'text-purple-400 bg-purple-500/10' 
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  
                  {/* Bottom Glow Line */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                      isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          
          {/* CTA Button */}
          <li className="ml-4">
            <Link
              href="/signup"
              className="relative px-6 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search AirBuds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-neutral-900/80 border border-neutral-700 text-white placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          </div>

          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
          
          <Link
            href="/signup"
            className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}