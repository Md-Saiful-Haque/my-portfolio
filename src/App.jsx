import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    // Load saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
    }

    // Smooth scrolling for navigation
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-body transition-colors duration-300 min-h-screen overflow-x-hidden selection:bg-pink-300 selection:text-black">
      {/* Background gradient */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-300 via-pink-300 to-yellow-200 blur-[100px] opacity-40 dark:opacity-20 pointer-events-none rounded-full z-0"></div>
      
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;