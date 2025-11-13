import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Play } from "lucide-react";

export function GalleryPage() {
  const galleryItems = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1759846779524-6042d32d487d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMGdhbGxlcnl8ZW58MXx8fHwxNzYwODk3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Renaissance Art Exhibition",
      category: "Art",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1581357421952-cbe61a77b7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMGdvd258ZW58MXx8fHwxNzYwODk3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fashion Show Highlights",
      category: "Fashion",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1578317671649-085805438297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGViYXRlJTIwcG9kaXVtfGVufDF8fHx8MTc2MDg5NzQxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Debate Competition",
      category: "Debate",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1524330685423-3e1966445abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzYwODkyMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Dance Performance",
      category: "Dance",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1738667289162-9e55132e18a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NjA4ODY3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Musical Evening",
      category: "Music",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjA4Mjk5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Hackathon Action",
      category: "Coding",
    },
    {
      type: "video",
      url: "https://images.unsplash.com/photo-1622319977720-9949ac28adc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3NjA4MDUwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Photography Workshop",
      category: "Media",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1614172745174-d76736beb78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWx8ZW58MXx8fHwxNzYwODYwODMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Runway Moments",
      category: "Fashion",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1543062591-e3c0fdb97350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjA4OTIzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Open Mic Night",
      category: "Music",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-6xl text-[#660000] mb-4">
            Gallery & Highlights
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Relive the magical moments from previous editions of Vizphoria
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid mb-6"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border-4 border-[#C9A227]/40 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Ornamental frame corners */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-br-lg" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Video play icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 rounded-full bg-[#C9A227]/90 flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#C9A227] text-[#1A1A1A] rounded-full text-sm font-['EB_Garamond']">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-30 pointer-events-none mix-blend-multiply" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-3xl p-12 border-4 border-[#C9A227] shadow-2xl max-w-3xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-4xl text-[#E5C158] mb-4">
              Be Part of the Next Chapter
            </h2>
            <p className="font-['EB_Garamond'] text-xl text-white/90 mb-6">
              Create your own memorable moments at Vizphoria 2025
            </p>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
