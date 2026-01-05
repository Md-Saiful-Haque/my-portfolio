import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "BSc in Textile Engineering",
      institution: "Port City International University",
      duration: "2020 - 2025",
      description: "• Key focus on yarn manufacturing, fabric manufacturing, wet processing, apparel manufacturing through modules: yarn testing, woven & knit manufacturing, dyeing, finishing, quality control, production calculation, textile raw material, color theory, printing, textile physics etc.",
      grade: "CGPA: 3.77/4.00"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Syeda Selima Kader Chowdhury Degree College",
      duration: "2017 - 2019",
      description: "Science background with focus on Mathematics, Physics, and Chemistry. Developed analytical and problem-solving skills.",
      grade: "GPA: 4.00/5.00"
    }
  ];

  return (
    <section id="education" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Educational Background
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My academic journey that shaped my foundation in computer science and technology
        </p>
      </div>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <span className="material-icons text-white dark:text-black text-2xl">school</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm font-bold text-black dark:text-white">
                      {edu.grade}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;