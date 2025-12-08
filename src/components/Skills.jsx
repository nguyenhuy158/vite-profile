import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // First, get recent repositories (limit to avoid rate limits)
        const reposResponse = await fetch('https://api.github.com/users/nguyenhuy158/repos?sort=updated&per_page=20');
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repos = await reposResponse.json();

        // Filter out forks and limit to recent repos to avoid rate limits
        const recentRepos = repos
          .filter(repo => !repo.fork)
          .slice(0, 10); // Process only the 10 most recent repos

        // Get languages for each repo (with rate limit handling)
        const languagePromises = recentRepos.map(async (repo) => {
          try {
            const langResponse = await fetch(`https://api.github.com/repos/nguyenhuy158/${repo.name}/languages`);
            if (langResponse.ok) {
              return await langResponse.json();
            }
            // If rate limited or error, fall back to primary language
            return repo.language ? { [repo.language]: 1000 } : {};
          } catch {
            // If rate limited, fall back to primary language
            return repo.language ? { [repo.language]: 1000 } : {};
          }
        });

        const languagesArrays = await Promise.all(languagePromises);

        // Aggregate languages across all repos
        const languageCounts = {};
        languagesArrays.forEach(languages => {
          Object.entries(languages).forEach(([lang, bytes]) => {
            languageCounts[lang] = (languageCounts[lang] || 0) + bytes;
          });
        });

        // Sort languages by usage
        const sortedLanguages = Object.entries(languageCounts)
          .sort(([,a], [,b]) => b - a)
          .map(([lang]) => lang);

        // Group languages by category
        const languageCategories = {
          'Frontend': ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'SASS', 'Less', 'Vue', 'React', 'Angular', 'Svelte'],
          'Backend': ['Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'C++', 'C', 'Swift', 'Kotlin', 'Scala'],
          'Database & Tools': ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
          'Other': []
        };

        const categorizedSkills = Object.entries(languageCategories).map(([category, categoryLangs]) => {
          const items = sortedLanguages.filter(lang => categoryLangs.includes(lang));
          return { category, items };
        }).filter(group => group.items.length > 0);

        // Add any remaining languages to "Other"
        const usedLanguages = categorizedSkills.flatMap(group => group.items);
        const otherLanguages = sortedLanguages.filter(lang => !usedLanguages.includes(lang));
        if (otherLanguages.length > 0) {
          categorizedSkills.push({ category: 'Other', items: otherLanguages });
        }

        setSkills(categorizedSkills);
      } catch (err) {
        if (err.message.includes('rate limit')) {
          setError('GitHub API rate limit exceeded. Skills will update in about an hour.');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Skills & Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Loading skills from GitHub...</p>
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Skills & Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Unable to load skills at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-slate-600">My technical toolkit based on GitHub repositories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;