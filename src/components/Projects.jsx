import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
    tags: ["React", "Tailwind CSS", "Recharts"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop functionality and team workspaces.",
    tags: ["Vue.js", "Firebase", "Pinia"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Weather Forecast",
    description: "Beautiful weather application providing detailed forecasts using OpenWeatherMap API.",
    tags: ["React", "API Integration", "Chart.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600">A selection of my recent work and experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-primary bg-blue-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2 border-t border-slate-100">
                  <a href={project.github} className="flex items-center gap-1 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-1 text-sm text-slate-600 hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
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

export default Projects;