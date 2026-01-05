import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="text-lg">
              Hello! I'm <strong className="text-black dark:text-white">Md Saiful Haque</strong>, a passionate MERN Stack Developer with a strong foundation in modern web development technologies and hands-on project experience in building full-stack web applications.
            </p>

            <p className='text-lg'>
              I recently completed a 6-month intensive web development course, where I gained hands-on experience in both frontend and backend technologies. On the frontend, I have worked with HTML5, CSS3, TailwindCSS, JavaScript, React, and Next.js, while on the backend, I have experience with Node.js, Express.js, and MongoDB. I am also proficient with development tools such as Git & GitHub, VS Code, Vercel, Vite, NPM, Firebase, and Postman.
              Although I do not have formal work experience yet, I have completed several projects during my course that strengthened my problem-solving, coding, and project management skills. I am eager to apply my knowledge in a professional environment, learn from real-world challenges, and contribute effectively to a team. I am highly motivated, quick to learn, and passionate about building high-quality, user-friendly web applications.

            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Months Learning</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                alt="Saiful Haque - MERN Stack Developer"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                src="https://i.ibb.co.com/pjHQj9jn/About-me.png"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-black dark:bg-white rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-black dark:border-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;