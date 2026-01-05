import React from 'react';

const Hero = () => {
  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mt-4 lg:mt-12 pb-20">
      <div className="lg:col-span-7 order-2 lg:order-1 pt-8 lg:pt-0">
        <div className="text-5xl mb-4 animate-pulse origin-bottom-right">👋</div>
        
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-gray-900 dark:text-white">
          <span className="font-extralight block">Hello!</span>
          <span className="font-black block mt-2">I'm Md Saiful Haque</span>
        </h1>
        
        <div className="flex items-center gap-6 mb-8">
          <div className="h-[2px] w-20 bg-gray-300 dark:bg-gray-600"></div>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light tracking-wide">MERN Stack Developer</h2>
          <svg className="text-black dark:text-white animate-spin-slow" fill="currentColor" height="32" viewBox="0 0 24 24" width="32">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
          </svg>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
          Hello! I'm Md Saiful Haque. I'm a <strong className="text-black dark:text-white font-semibold"> MERN Stack Developer </strong>
           with a strong foundation in modern web development technologies and hands-on project experience in building full-stack web applications.
        </p>
        
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a
            href="/resume.pdf"
            download="Saiful_Haque_Resume.pdf"
            className="bg-primary text-white hover:bg-gray-800 dark:hover:bg-gray-700 dark:border-2 dark:border-white px-10 py-4 rounded-full font-display font-medium text-lg transition-all hover:-translate-y-1 shadow-lg flex items-center gap-3"
          >
            <span className="material-icons">download</span>
            Download Resume
          </a>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Follow me:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Md-Saiful-Haque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <span className="material-icons">code</span>
              </a>
              <a
                href="https://linkedin.com/in/saiful-haque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <span className="material-icons">work</span>
              </a>
              <a
                href="https://twitter.com/saiful_haque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <span className="material-icons">alternate_email</span>
              </a>
              <a
                href="https://facebook.com/saiful.haque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <span className="material-icons">facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-5 order-1 lg:order-2 relative">
        <div className="absolute -top-10 -left-10 z-0 hidden lg:block">
          <svg className="text-black dark:text-white opacity-20" fill="none" height="100" stroke="currentColor" viewBox="0 0 100 100" width="100">
            <line strokeWidth="2" x1="0" x2="100" y1="100" y2="0"></line>
            <line strokeWidth="2" x1="20" x2="100" y1="100" y2="20"></line>
          </svg>
        </div>
        
        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="relative rounded-t-full rounded-b-[40%] overflow-hidden bg-gray-100 dark:bg-gray-800 border-b-0">
            <img 
              alt="Portrait of Saiful, MERN Stack Developer" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 grayscale-[20%] hover:grayscale-0" 
              src="https://i.ibb.co.com/pjHQj9jn/About-me.png"
            />
          </div>
          
          
          <div className="absolute bottom-20 -right-8 lg:-right-12 w-16 h-16 z-0">
            <svg className="text-black dark:text-white w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8" viewBox="0 0 100 100">
              <path d="M10 10 Q 50 50, 90 10 T 90 90"></path>
            </svg>
          </div>
          
          <div className="absolute top-1/3 -left-4 text-black dark:text-white font-bold text-xl select-none">/</div>
          <div className="absolute top-1/4 right-0 text-black dark:text-white font-bold text-xl select-none">\</div>
        </div>
      </div>
    </main>
  );
};

export default Hero;