import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  const projectDetails = {
    1: { // KrishiLink
      mainTech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      liveLink: 'https://krishilink-client-project.netlify.app/',
      githubLink: 'https://github.com/Md-Saiful-Haque/krishiLink-client',
      challenges: [
        'Implementing real-time crop price updates',
        'Creating a secure farmer-buyer communication system',
        'Designing an intuitive interface for users with varying tech literacy',
        'Integrating weather API for agricultural insights'
      ],
      improvements: [
        'Add mobile app version for better accessibility',
        'Implement AI-powered crop recommendation system',
        'Add multi-language support for rural farmers',
        'Integrate payment gateway for direct transactions'
      ]
    },
    2: { // ScholarStream
      mainTech: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript', 'React Router'],
      liveLink: 'https://scholar-stream-da98b.web.app/',
      githubLink: 'https://github.com/Md-Saiful-Haque/scholarStream-client',
      challenges: [
        'Managing complex user authentication and authorization',
        'Creating dynamic scholarship filtering system',
        'Implementing real-time application status updates',
        'Designing responsive layouts for various screen sizes'
      ],
      improvements: [
        'Add scholarship recommendation algorithm',
        'Implement document upload and verification system',
        'Add email notification system for application updates',
        'Create admin dashboard for scholarship management'
      ]
    },
    3: { // ToyTopia
      mainTech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Stripe'],
      liveLink: 'https://toys-projects-kido.netlify.app/',
      githubLink: 'https://github.com/Md-Saiful-Haque/toy-topia',
      challenges: [
        'Implementing secure payment processing',
        'Creating efficient product search and filtering',
        'Managing inventory and order tracking system',
        'Optimizing image loading for product galleries'
      ],
      improvements: [
        'Add wishlist and comparison features',
        'Implement advanced product recommendation engine',
        'Add customer review and rating system',
        'Create seller dashboard for inventory management'
      ]
    },
    4: { // Hero Apps
      mainTech: ['React', 'JavaScript', 'CSS3', 'REST API', 'Local Storage'],
      liveLink: 'https://lovely-speculoos-eb3cdd.netlify.app/',
      githubLink: 'https://github.com/Md-Saiful-Haque/A08-hero-apps',
      challenges: [
        'Integrating external superhero API efficiently',
        'Creating smooth animations and transitions',
        'Managing application state without external libraries',
        'Implementing responsive character card layouts'
      ],
      improvements: [
        'Add character comparison feature',
        'Implement advanced search with multiple filters',
        'Add user favorites and collections',
        'Create character battle simulation game'
      ]
    }
  };

  const details = projectDetails[project.id];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-icons text-gray-600 dark:text-gray-400">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-gray-100 dark:bg-gray-800">
            <img 
              src={project.imageUrl}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`} style={{display: 'none'}}>
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-icons text-2xl">web</span>
                </div>
                <p className="text-lg font-medium">{project.title}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Project Description</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Main Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {details.mainTech.map(tech => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={details.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black py-4 px-6 rounded-2xl font-display font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <span className="material-icons">launch</span>
              View Live Project
            </a>
            <a
              href={details.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-black dark:border-white text-black dark:text-white py-4 px-6 rounded-2xl font-display font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              <span className="material-icons">code</span>
              GitHub Repository
            </a>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Challenges Faced</h3>
            <ul className="space-y-3">
              {details.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-icons text-red-500 text-sm mt-1">error_outline</span>
                  <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Future Improvements</h3>
            <ul className="space-y-3">
              {details.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-icons text-green-500 text-sm mt-1">lightbulb</span>
                  <span className="text-gray-600 dark:text-gray-400">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;