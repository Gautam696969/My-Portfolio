import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite} from 'react-icons/si';
const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Vite', icon: <SiVite className="text-violet-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
]
const SkillsSection = () => {
    return (
        <section id="skills" className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          My <span className="text-indigo-500">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-indigo-500/30 transition duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
