import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: 'About Me', description: 'Learn about my journey' },
    { href: '#portfolio', label: 'Projects', description: 'See my latest work' },
    { href: '#skills', label: 'Skills', description: 'My technical expertise' },
    { href: '#education', label: 'Education', description: 'Academic background' },
    { href: '#contact', label: 'Contact', description: 'Get in touch with me' }
  ];

  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:justify-start lg:items-center lg:gap-32">
        <div className="mb-10 md:mb-0 flex justify-between items-center w-full md:w-auto lg:flex-shrink-0">
          <a className="font-display text-3xl font-bold tracking-tight group" href="/">
            Saiful <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-black dark:after:bg-white">me</span>
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600"
          >
            <span className="material-icons text-gray-600 dark:text-gray-400">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="max-w-[1000px] mx-auto hidden md:flex flex-row gap-8 lg:gap-16 lg:flex-grow lg:justify-start">
          {navItems.map((item, index) => (
            <a key={index} className="group w-48" href={item.href}>
              <div className="border-t border-black dark:border-gray-400 pt-2 flex justify-between items-center transition-all group-hover:pl-2">
                <span className="font-display font-bold text-sm uppercase tracking-wide">{item.label}</span>
                <span className="material-icons text-sm transform group-hover:rotate-45 transition-transform">north_east</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden w-full mt-8 space-y-6">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                className="group block w-full" 
                href={item.href}
                onClick={closeMobileMenu}
              >
                <div className="border-t border-black dark:border-gray-400 pt-2 flex justify-between items-center transition-all group-hover:pl-2">
                  <span className="font-display font-bold text-sm uppercase tracking-wide">{item.label}</span>
                  <span className="material-icons text-sm transform group-hover:rotate-45 transition-transform">north_east</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;