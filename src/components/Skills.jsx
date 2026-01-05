import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️', level: 90 },
        { name: 'JavaScript', icon: '🟨', level: 85 },
        { name: 'Next.js', icon: '💙', level: 50 },
        { name: 'Tailwind CSS', icon: '🎨', level: 90 },
        { name: 'HTML5', icon: '🧡', level: 95 },
        { name: 'CSS3', icon: '💎', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Express.js', icon: '⚡', level: 80 },
        { name: 'MongoDB', icon: '🍃', level: 85 },
        { name: 'Firebase', icon: '🔥', level: 75 },
        { name: 'JWT', icon: '🔐', level: 80 },
        { name: 'REST API', icon: '🔗', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: '🔧', level: 85 },
        { name: 'GitHub', icon: '🐙', level: 90 },
        { name: 'VS Code', icon: '💻', level: 95 },
        { name: 'Figma', icon: '🎯', level: 70 },
        { name: 'Netlify', icon: '🌐', level: 80 },
        { name: 'Vercel', icon: '▲', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Technologies
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="font-display text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-black dark:bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;