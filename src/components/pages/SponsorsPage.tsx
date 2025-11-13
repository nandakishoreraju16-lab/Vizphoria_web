import { motion } from "motion/react";
import { Award, Star } from "lucide-react";

export function SponsorsPage() {
  const sponsors = {
    title: [
      { name: "Royal Bank", tier: "Title Sponsor", logo: "🏛️" },
    ],
    platinum: [
      { name: "Tech Renaissance", tier: "Platinum", logo: "💎" },
      { name: "Golden Arts Foundation", tier: "Platinum", logo: "🎨" },
    ],
    gold: [
      { name: "Fashion House Elite", tier: "Gold", logo: "👔" },
      { name: "CodeCraft Solutions", tier: "Gold", logo: "💻" },
      { name: "Media Masters", tier: "Gold", logo: "📹" },
      { name: "Harmony Music Academy", tier: "Gold", logo: "🎵" },
    ],
    silver: [
      { name: "Campus Café", tier: "Silver", logo: "☕" },
      { name: "BookWorm Publishers", tier: "Silver", logo: "📚" },
      { name: "SportPro Equipment", tier: "Silver", logo: "⚽" },
      { name: "Artistic Prints", tier: "Silver", logo: "🖼️" },
      { name: "Digital Dreams", tier: "Silver", logo: "💡" },
      { name: "Renaissance Decor", tier: "Silver", logo: "🏺" },
    ],
  };

  const partners = [
    { name: "City Council", type: "Community Partner", icon: "🏛️" },
    { name: "Youth Development Board", type: "Youth Partner", icon: "👥" },
    { name: "Art & Culture Ministry", type: "Cultural Partner", icon: "🎭" },
    { name: "Local Radio FM", type: "Media Partner", icon: "📻" },
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
            Our Sponsors & Partners
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Celebrating the royal patrons who make Vizphoria possible
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <Award className="w-6 h-6 text-[#C9A227]" />
              <h2 className="font-['Playfair_Display'] text-3xl text-[#660000]">
                Title Sponsor
              </h2>
              <Award className="w-6 h-6 text-[#C9A227]" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </div>

          {sponsors.title.map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-[#F5F1E8] to-[#EDE9E0] rounded-3xl p-12 border-4 border-[#C9A227] shadow-2xl relative overflow-hidden group">
                {/* Ornamental corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-[#660000]/20 rounded-tl-2xl" />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#660000]/20 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#660000]/20 rounded-bl-2xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-[#660000]/20 rounded-br-2xl" />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 via-transparent to-[#660000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="text-center relative z-10">
                  <div className="text-8xl mb-6">{sponsor.logo}</div>
                  <h3 className="font-['Playfair_Display'] text-4xl text-[#660000] mb-2">
                    {sponsor.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#C9A227] to-[#E5C158] rounded-full">
                    <Star className="w-5 h-5 text-[#1A1A1A] fill-[#1A1A1A]" />
                    <span className="font-['EB_Garamond'] text-lg text-[#1A1A1A]">
                      {sponsor.tier}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-2">
              Platinum Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-4 border-[#C9A227]/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4">{sponsor.logo}</div>
                    <h3 className="font-['Playfair_Display'] text-2xl text-[#660000] mb-2">
                      {sponsor.name}
                    </h3>
                    <span className="inline-block px-4 py-1 bg-[#E8E4E8] rounded-full font-['EB_Garamond'] text-[#4A0000] border border-[#C9A227]/30">
                      {sponsor.tier}
                    </span>
                  </div>

                  {/* Decorative lines */}
                  <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-2">
              Gold Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[#C9A227]/30 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-center relative z-10">
                    <div className="text-5xl mb-3">{sponsor.logo}</div>
                    <h3 className="font-['Playfair_Display'] text-lg text-[#660000] mb-1">
                      {sponsor.name}
                    </h3>
                    <span className="text-sm font-['EB_Garamond'] text-[#4A0000]/70">
                      {sponsor.tier}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-2">
              Silver Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/50 rounded-lg p-4 border border-[#C9A227]/20 shadow hover:shadow-md transition-all duration-300 text-center">
                  <div className="text-4xl mb-2">{sponsor.logo}</div>
                  <h3 className="font-['EB_Garamond'] text-sm text-[#660000]">
                    {sponsor.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-2">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[#C9A227]/30 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-center relative z-10">
                    <div className="text-5xl mb-3">{partner.icon}</div>
                    <h3 className="font-['Playfair_Display'] text-lg text-[#660000] mb-1">
                      {partner.name}
                    </h3>
                    <span className="text-sm font-['EB_Garamond'] text-[#4A0000]/70">
                      {partner.type}
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="absolute top-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-3xl p-12 border-4 border-[#C9A227] shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
            
            <h2 className="font-['Playfair_Display'] text-4xl text-[#E5C158] mb-4">
              Thank You to Our Supporters
            </h2>
            <p className="font-['EB_Garamond'] text-xl text-white/90 max-w-2xl mx-auto">
              Your generous support makes Vizphoria a grand Renaissance celebration.
              Together, we create unforgettable experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
