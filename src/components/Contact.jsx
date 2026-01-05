import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'Web Development',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation and success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      project: 'Web Development',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'saifulhaque.pciu@gmail.com',
      link: 'mailto:saifulhaque.pciu@gmail.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+880 1645075921',
      link: 'tel:+8801645075921'
    },
    {
      icon: 'chat',
      title: 'WhatsApp',
      value: '+880 1814355040',
      link: 'https://wa.me/8801234567890'
    }
  ];

  return (
    <section id="contact" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-outline">Together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-2xl transition-colors"
              >
                <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-icons text-white dark:text-black">{info.icon}</span>
                </div>
                <div>
                  <p className="font-display font-bold">{info.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
            
            {/* Additional Location Info */}
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="material-icons text-white dark:text-black">location_on</span>
              </div>
              <div>
                <p className="font-display font-bold">Location</p>
                <p className="text-gray-600 dark:text-gray-400">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="project">Project Type</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
              >
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Full Stack Project</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors h-32 resize-none"
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button
              className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-display font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;