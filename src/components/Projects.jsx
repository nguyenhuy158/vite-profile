import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Loader2 } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nguyenhuy158/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const repos = await response.json();

        // Transform GitHub repos to project format
        const transformedProjects = await Promise.all(repos
          .filter(repo => !repo.fork && !repo.private) // Only show public, non-fork repos
          .slice(0, 6) // Limit to 6 projects
          .map(async (repo) => {
            // Try to get thumbnail from repo
            let thumbnail = `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`; // Default fallback with random seed

            try {
              // Try background.png first
              const pngResponse = await fetch(`https://raw.githubusercontent.com/nguyenhuy158/${repo.name}/main/background.png`);
              if (pngResponse.ok) {
                thumbnail = `https://raw.githubusercontent.com/nguyenhuy158/${repo.name}/main/background.png`;
              } else {
                // Try background.jpg
                const jpgResponse = await fetch(`https://raw.githubusercontent.com/nguyenhuy158/${repo.name}/main/background.jpg`);
                if (jpgResponse.ok) {
                  thumbnail = `https://raw.githubusercontent.com/nguyenhuy158/${repo.name}/main/background.jpg`;
                }
              }
            } catch (error) {
              // Keep default thumbnail if fetch fails
              console.log(`Could not load thumbnail for ${repo.name}:`, error);
            }

            return {
              title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Format name
              description: repo.description || 'No description available',
              tags: repo.language ? [repo.language] : [], // Use primary language as tag
              github: repo.html_url,
              demo: repo.homepage || '#', // Use homepage if available, otherwise placeholder
              image: thumbnail
            };
          }));

        setProjects(transformedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-slate-600">Loading projects from GitHub...</p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-slate-600">Unable to load projects at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600">A selection of my recent work from GitHub.</p>
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-slate-600 hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
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