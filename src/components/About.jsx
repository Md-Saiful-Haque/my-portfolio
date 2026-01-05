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
              Hello! I'm <strong className="text-black dark:text-white">Md Saiful Haque</strong>, a motivated <strong className="text-black dark:text-white">MERN Stack Developer</strong> with a strong interest in building modern, scalable, and user-friendly web applications. My programming journey began with a curiosity about how websites work, which gradually turned into a focused pursuit of full-stack web development.
            </p>

            <p className='text-lg'>
              I recently completed a 6-month intensive web development course, where I gained hands-on experience working with both frontend and backend technologies. On the frontend, I enjoy creating clean, responsive, and interactive user interfaces using <strong className="text-black dark:text-white">HTML5, CSS3, TailwindCSS, JavaScript, React, and Next.js.</strong> On the backend, I have worked with <strong className="text-black dark:text-white">Node.js, Express.js, and MongoDB</strong>, focusing on building efficient APIs and handling data securely. I am also comfortable using tools such as <strong className="text-black dark:text-white">Git & GitHub, VS Code, Vercel, Vite, NPM, Firebase, and Postman</strong> in my development workflow.
            </p>
            <p className='text-lg'>
              I particularly enjoy working on projects where I can solve real-world problems, learn new technologies, and continuously improve my skills. I like writing clean, maintainable code and understanding how different parts of an application work together. Even though I do not have professional work experience yet, the projects I completed during my course helped me develop strong problem-solving skills, teamwork abilities, and a disciplined approach to learning.
            </p>
            <p className='text-lg'>
              Outside of programming, I enjoy activities that help me stay focused and balanced, such as exploring new technologies, learning from tech communities, and spending time on personal growth. I consider myself a curious, hardworking, and adaptable person who is always eager to learn and take on new challenges. My goal is to grow as a professional developer and contribute meaningfully to a team while building impactful digital solutions.
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