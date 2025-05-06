import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/image/OIP.jpg', // Place image in public/image/
    description: 'A personal portfolio built with React and Tailwind CSS.',
    demoLink: 'https://gautam696969.github.io/Health-Software/',
    codeLink: '#',
  },
  {
    title: 'Health-Software',
    image: '/image/health.jpg',
    description: 'A responsive shopping UI with product cards and filters.',
    demoLink: 'https://gautam696969.github.io/Health-Software/',
    codeLink: '#',
  },
  {
    title: 'Voice ai',
    image: '/image/voice.webp',
    description: 'Live crypto price tracker using CoinGecko API and React.',
    demoLink: 'https://gautam696969.github.io/voice-AI1/',
    codeLink: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-950 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="text-sm px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-sm px-4 py-2 border border-indigo-500 rounded-xl hover:bg-indigo-500 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
