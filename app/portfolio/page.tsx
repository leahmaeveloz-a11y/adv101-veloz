import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: 'Back to You – Lost and Found System',
    category: 'Dashboard',
    description: 'An integrating lost and found system designed for Holy Cross of Davao College students. It aims to help students report lost belongings and find items reported by other students.',
    url: '#',
  },
  {
    title: ' PlushieLove – Plushie Shopping Website',
    category: 'E-Commerce',
    description: 'A website where users can browse different plushies they may want to buy. It provides an easy way to view available plushie products.',
    url: '#',
  },
  {
    title: 'Cosmic Defender – Game Project',
    category: 'System Architecture',
    description: 'A game development project focused on creating an interactive gaming experience. Further details about its gameplay and features can be added based on the actual project.',
    url: '#',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-indigo-400 block mb-2 font-semibold">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Selected Works
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="group block p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}