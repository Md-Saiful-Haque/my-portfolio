import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'code', label: 'GitHub', href: 'https://github.com/Md-Saiful-Haque' },
    { icon: 'work', label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-saiful-haque12/' },
    { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/me/' }
  ];

  return (
    <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a className="font-display text-2xl font-bold tracking-tight" href="/">
            Saiful <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white">me</span>
          </a>
          <p className="text-gray-600 dark:text-gray-400 mt-2">MERN Stack Developer</p>
        </div>
        
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              href={link.href}
              aria-label={link.label}
            >
              <span className="material-icons">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; 2025 Saiful Haque. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;