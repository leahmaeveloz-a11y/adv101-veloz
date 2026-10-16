import { Award, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const skills: string[] = [
    'TypeScript & JavaScript',
    'React & CSS',
    'Tailwind CSS & UI Design',
    'Node.js & Express',
    'Java & MySQL',
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 block mb-2">
            About Me
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Background & Philosophy
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-16">
          
          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm">
            <div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden mb-6">
              <img
                src="profile.jpg"
                alt="Leah Mae Veloz"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Leah Mae Veloz</h2>
            <p className="text-indigo-400 text-sm font-medium mb-4">BSIT - 2nd Year College</p>
            <div className="space-y-2 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Information Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>Aspiring Designer</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-white">Hello!</h3>
              <p className="text-zinc-300 leading-relaxed font-normal text-base">
                Hi! I&apos;m <strong className="text-white">Leah Mae Veloz</strong>. Course: Bachelor of Science in Information Technology 2nd Year College Student!
              </p>
              <p className="text-zinc-400 leading-relaxed font-normal text-sm">
                My approach strips away unnecessary ornamentation, allowing content and functionality to take center stage. Every element is intentional, designed to create a calm and seamless user interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" /> Core Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-zinc-200 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}