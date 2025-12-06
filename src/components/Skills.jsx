import React from 'react';

const skills = [
  { category: "Backend & Systems", items: ["Node.js", "Odoo", "Golang"] },
  { category: "Frontend", items: ["React", "CSS"] },
];

const Skills = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-slate-600">My technical toolkit and areas of focus.</p>
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