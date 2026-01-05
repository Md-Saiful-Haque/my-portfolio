import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({
      ...prev,
      [itemId]: true
    }));
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'KrishiLink',
      description: 'A comprehensive agricultural platform connecting farmers with buyers, featuring crop management, marketplace functionality, and real-time agricultural data. Built with modern web technologies to bridge the gap between traditional farming and digital commerce.',
      category: 'ux-ui',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'tailwindcss', 'JavaScript'],
      gradient: 'from-green-100 to-emerald-50 dark:from-gray-800 dark:to-gray-900',
      githubUrl: 'https://github.com/Md-Saiful-Haque/krishiLink-client',
      liveUrl: 'https://krishilink-client-project.netlify.app/',
      imageUrl: 'https://i.ibb.co.com/JWd0WQRM/Screenshot-2026-01-05-180653.png',
      imageAlt: 'KrishiLink - Agricultural Platform Screenshot'
    },
    {
      id: 2,
      title: 'ScholarStream',
      description: 'An innovative educational platform designed to streamline scholarship applications and academic resource sharing. Features user authentication, application tracking, and comprehensive scholarship database with advanced filtering capabilities.',
      category: 'strategy',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Firebase Authentication', 'Express', 'MongoDB', 'Node.js', 'JavaScript'],
      gradient: 'from-blue-100 to-indigo-50 dark:from-gray-800 dark:to-gray-900',
      githubUrl: 'https://github.com/Md-Saiful-Haque/scholarStream-client',
      liveUrl: 'https://scholar-stream-da98b.web.app/',
      imageUrl: 'https://i.ibb.co.com/zVbsSXFx/Screenshot-2025-12-31-163320.png',
      imageAlt: 'ScholarStream - Educational Platform Screenshot'
    },
    {
      id: 3,
      title: 'ToyTopia',
      description: 'A dynamic e-commerce platform specializing in toy retail with comprehensive product management, user reviews, and secure payment integration. Features responsive design and intuitive user experience for both buyers and sellers.',
      category: 'research',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'tailwindcss', 'JavaScript'],
      gradient: 'from-pink-100 to-rose-50 dark:from-gray-800 dark:to-gray-900',
      githubUrl: 'https://github.com/Md-Saiful-Haque/toy-topia',
      liveUrl: 'https://toys-projects-kido.netlify.app/',
      imageUrl: 'https://i.ibb.co.com/QFfNCMdF/Screenshot-2026-01-05-180952.png',
      imageAlt: 'ToyTopia - E-commerce Platform Screenshot'
    },
    {
      id: 4,
      title: 'Hero Apps',
      description: 'A superhero-themed web application featuring interactive character profiles, dynamic content management, and engaging user interfaces. Showcases advanced React concepts and modern web development practices with responsive design.',
      category: 'strategy',
      tags: ['React', 'JavaScript', 'tailwindcss', 'API Integration', 'Responsive'],
      gradient: 'from-purple-100 to-violet-50 dark:from-gray-800 dark:to-gray-900',
      githubUrl: 'https://github.com/Md-Saiful-Haque/A08-hero-apps',
      liveUrl: 'https://lovely-speculoos-eb3cdd.netlify.app/',
      imageUrl: 'https://i.ibb.co.com/Txhgk5jT/Screenshot-2026-01-05-181120.png',
      imageAlt: 'Hero Apps - Superhero Web Application Screenshot'
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'ux-ui', label: 'Full Stack' },
    { id: 'strategy', label: 'Web Apps' },
    { id: 'research', label: 'E-commerce' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 pb-24">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Projects<br/>
            <span className="text-outline">projects</span> & Work
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A showcase of my MERN stack development projects, featuring full-stack web applications with modern technologies and user-centric design.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {filterButtons.map(button => (
            <button
              key={button.id}
              onClick={() => handleFilterChange(button.id)}
              className={`px-5 py-2.5 rounded-full font-display font-medium text-sm transition-all hover:-translate-y-1 shadow-md ${
                activeFilter === button.id
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white text-gray-600 dark:text-gray-300'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {filteredItems.map((item, index) => (
          <article 
            key={item.id}
            className={`portfolio-item group cursor-pointer flex flex-col h-full ${
              index % 2 === 1 ? 'md:mt-24' : ''
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-gray-100 dark:bg-gray-800 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
              {/* Fallback gradient background */}
              
              
              {/* Project Screenshot */}
              {!imageErrors[item.id] && (
                <img 
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                  onError={() => handleImageError(item.id)}
                  loading="lazy"
                />
              )}
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-20"></div>
              
              {/* Placeholder content when image fails to load */}
              {imageErrors[item.id] && (
                <div className="absolute inset-0 flex items-center justify-center z-15">
                  <div className="text-center text-white/80">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-icons text-2xl">web</span>
                    </div>
                    <p className="text-sm font-medium">Project Preview</p>
                  </div>
                </div>
              )}
              
              {/* Tags overlay */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-30">
                {item.tags.slice(0, 4).map(tag => (
                  <span 
                    key={tag}
                    className="bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <a 
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-all duration-300"
                >
                  <span className="material-icons text-xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-400 group-hover:text-white dark:group-hover:text-black">
                    launch
                  </span>
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => openProjectDetail(item)}
                  className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-3 px-4 rounded-xl font-display font-bold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <span className="material-icons text-sm">visibility</span>
                  Details
                </button>
                <a 
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-black dark:border-white text-black dark:text-white py-3 px-4 rounded-xl font-display font-bold text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <span className="material-icons text-sm">launch</span>
                  Live Demo
                </a>
                <a 
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl font-display font-bold text-sm hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors"
                >
                  <span className="material-icons text-sm">code</span>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg font-light">
          Interested in working together?
        </p>
        <a 
          className="inline-block font-display text-5xl md:text-7xl font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-tight" 
          href="#contact"
        >
          Let's start a project
        </a>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={closeProjectDetail} 
        />
      )}
    </section>
  );
};

export default Portfolio;