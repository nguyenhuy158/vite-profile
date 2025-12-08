import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="text-primary">Huy Nguyen</span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-600 font-semibold">Backend Developer</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-lg">
            I love coding.
          </p>

          <div className="flex gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group cursor-pointer bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#contact"
              className="cursor-pointer border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-slate-500">
            <a href="https://github.com/nguyenhuy158/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nguyenhuy158/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@ntqhuy2k2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
               {/* Replace with your image */}
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;