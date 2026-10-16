interface GalleryItem {
  title: string;
  category: string;
  url: string;
}

const galleryImages: GalleryItem[] = [
  { title: 'Ui Design', category: 'Testing', url: 'pic1.jpg' },
  { title: 'Flexing myself', category: 'Meee', url: 'pic5.jpg' },
  { title: 'Spring', category: 'Nature', url: 'pic3.jpg' },
  { title: 'Amazed', category: 'Architecture', url: 'pic4.jpg' },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <span className="text-xs tracking-widest uppercase text-zinc-400 block mb-2">Gallery</span>
        <h1 className="text-3xl font-light text-zinc-900 tracking-tight">Visual Studies</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {galleryImages.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-4/3 bg-zinc-100 rounded-lg overflow-hidden mb-4">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-zinc-900">{item.title}</span>
              <span className="text-zinc-400 text-xs tracking-wider uppercase">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}