import React, { forwardRef, useState } from 'react';
import { Cpu, Terminal, Cloud, Layers, Database, Code, CheckCircle, Layout } from 'lucide-react';

export const Skills = forwardRef<HTMLElement>((_, ref) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'backend', label: 'Backend & Scripting' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  // Strictly technologies backed by resume
  const skillsList = [
    // Frontend
    { name: 'React', category: 'frontend', type: 'UI Library', icon: Code, highlight: 'Component Architecture' },
    { name: 'HTML5', category: 'frontend', type: 'Markup Language', icon: Code, highlight: 'Semantic Layouts' },
    { name: 'CSS3', category: 'frontend', type: 'Styling & Motion', icon: Layout, highlight: 'Modern Flexbox/Grid' },
    { name: 'JavaScript', category: 'frontend', type: 'Core Language', icon: Code, highlight: 'ES6+ & DOM Logic' },
    { name: 'Bootstrap', category: 'frontend', type: 'CSS Framework', icon: Layers, highlight: 'Responsive Grids' },
    { name: 'Responsive Web Design', category: 'frontend', type: 'Methodology', icon: Layout, highlight: 'Mobile-First' },
    { name: 'Figma', category: 'frontend', type: 'UI/UX Design', icon: Layers, highlight: 'Interface Prototyping' },

    // Cloud & Infrastructure
    { name: 'AWS IAM', category: 'cloud', type: 'Cloud Security', icon: Cloud, highlight: 'Roles & Policies' },
    { name: 'Amazon S3', category: 'cloud', type: 'Cloud Storage', icon: Cloud, highlight: 'Bucket Configuration' },
    { name: 'Amazon EC2', category: 'cloud', type: 'Cloud Compute', icon: Cloud, highlight: 'Instance Management' },
    { name: 'Linux / Ubuntu', category: 'cloud', type: 'Operating System', icon: Terminal, highlight: 'CLI Administration' },
    { name: 'CI/CD Fundamentals', category: 'cloud', type: 'DevOps Concept', icon: Cpu, highlight: 'Pipeline Awareness' },
    { name: 'Git', category: 'cloud', type: 'Version Control', icon: Terminal, highlight: 'Branching & Merging' },
    { name: 'GitHub', category: 'cloud', type: 'Code Repository', icon: Terminal, highlight: 'Remote Collaboration' },

    // Backend & Scripting
    { name: 'Python', category: 'backend', type: 'Programming', icon: Code, highlight: 'Scripting & Logic' },
    { name: 'PHP', category: 'backend', type: 'Backend Web', icon: Code, highlight: 'Server-side Logic & Auth' },
    { name: 'SQL', category: 'backend', type: 'Query Language', icon: Database, highlight: 'Data Manipulation' },

    // Databases
    { name: 'MySQL', category: 'database', type: 'Relational DB', icon: Database, highlight: 'Schema Design & CRUD' },
    { name: 'MongoDB', category: 'database', type: 'NoSQL DB', icon: Database, highlight: 'Document Collections' },

    // Tools & Platforms
    { name: 'Netlify', category: 'tools', type: 'Hosting Platform', icon: Cloud, highlight: 'Live Web Deployment' },
    { name: 'Vercel', category: 'tools', type: 'Deployment Platform', icon: Cloud, highlight: 'Edge & Frontend Cloud' },
    { name: 'VS Code', category: 'tools', type: 'IDE / Editor', icon: Terminal, highlight: 'Daily Development' },
    { name: 'Anaconda', category: 'tools', type: 'Environment', icon: Terminal, highlight: 'Python Environment' },
    { name: 'XAMPP', category: 'tools', type: 'Local Server Stack', icon: Database, highlight: 'Apache & MySQL Server' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-white tracking-tight break-words">
          Technologies &amp; <span className="text-brand-red">Tooling</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl">
          Core technical competencies verified across hands-on academic coursework and independently deployed web applications.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wide transition-all ${
              activeCategory === cat.id
                ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]'
                : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Responsive 2-Column Grid on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group glass-panel rounded-xl p-2.5 xs:p-3 sm:p-4 lg:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_8px_25px_rgba(255,38,38,0.15)] relative overflow-hidden min-w-0"
            >
              {/* Corner subtle red glow */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-brand-red/10 rounded-full blur-xl group-hover:bg-brand-red/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3 gap-1">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-brand-red/40 group-hover:bg-brand-red/10 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-brand-red transition-colors" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                    {skill.type}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg text-white group-hover:text-brand-red transition-colors leading-snug break-words">
                  {skill.name}
                </h3>
              </div>

              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-400 font-mono min-w-0">
                <CheckCircle className="w-3 h-3 text-brand-red flex-shrink-0" />
                <span className="truncate">{skill.highlight}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
