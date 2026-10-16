export default function AboutPage() {
  const skills = ['TypeScript', 'React & Next.js', 'Tailwind CSS', 'UI/UX Design', 'Node.js', 'Front-end'];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <span className="text-xs tracking-widest uppercase text-zinc-400 block mb-2">About</span>
      <h1 className="text-3xl font-light text-white tracking-tight mb-12">Background & Philosophy</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-6 text-zinc-300 font-light leading-relaxed">
          <p className="whitespace-pre-line text-white">
            Hi! I'm Leah Mae Veloz{'\n'}
            Course: Bachelor of Science in Information Technology{'\n'}
            2nd Year College
          </p>
          <p className="text-zinc-400">
            My approach strips away unnecessary ornamentation, allowing content and functionality to take center stage. Every element is intentional, designed to create a calm and seamless user interaction.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-12">
        <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-6">Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}