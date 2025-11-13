import { motion } from "motion/react";
import { Calendar, MapPin, Crown, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { VizphoriaLogo } from "../VizphoriaLogo";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const highlights = [
    "6 Exciting Clubs • 20+ Events",
    "₹50,000+ Prize Pool",
    "Celebrity Judges & Guests",
    "3 Days of Renaissance Magic",
    "Live Performances & Competitions",
    "Networking & Cultural Exchange",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Decorative angel wings */}
        <div className="absolute top-32 left-10 md:left-20 opacity-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
              <path
                d="M75 20 Q50 50 40 80 T30 140 Q40 160 60 170 T75 180"
                stroke="#C9A227"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M75 20 Q60 40 50 60 T40 100 Q45 120 55 135 T75 180"
                stroke="#C9A227"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute top-32 right-10 md:right-20 opacity-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
              <path
                d="M75 20 Q100 50 110 80 T120 140 Q110 160 90 170 T75 180"
                stroke="#C9A227"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M75 20 Q90 40 100 60 T110 100 Q105 120 95 135 T75 180"
                stroke="#C9A227"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </div>

        {/* Floating crown */}
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Crown className="w-16 h-16 text-[#C9A227] opacity-30" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo with ornamental frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative inline-block mb-8"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #C9A227, transparent)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Ornamental corners */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#C9A227] rounded-tl-lg" />
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#C9A227] rounded-tr-lg" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#C9A227] rounded-bl-lg" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#C9A227] rounded-br-lg" />
              
              <VizphoriaLogo size="large" animated showSubtitle={false} className="relative z-10" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-4 mb-10"
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#660000] italic">
                A Renaissance Celebration
              </h2>
              <p className="font-['EB_Garamond'] text-xl md:text-2xl text-[#4A0000] max-w-3xl mx-auto leading-relaxed">
                Step into a world where art meets innovation, and culture embraces creativity.
                Experience the grandeur of Renaissance at our most spectacular college fest.
              </p>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#C9A227]/30 shadow-lg">
                <Calendar className="w-6 h-6 text-[#660000]" />
                <span className="font-['EB_Garamond'] text-lg text-[#1A1A1A]">
                  December 16-19, 2025
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#C9A227]/30 shadow-lg">
                <MapPin className="w-6 h-6 text-[#660000]" />
                <span className="font-['EB_Garamond'] text-lg text-[#1A1A1A]">
                  College Campus
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button
                onClick={() => onNavigate("events")}
                className="bg-[#660000] hover:bg-[#8B0000] text-white px-10 py-6 rounded-full text-lg font-['EB_Garamond'] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#C9A227]/50 hover:border-[#E5C158] group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explore Events
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-[#660000] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              
              <Button
                onClick={() => onNavigate("register")}
                className="bg-gradient-to-r from-[#C9A227] to-[#E5C158] hover:from-[#E5C158] hover:to-[#C9A227] text-[#1A1A1A] px-10 py-6 rounded-full text-lg font-['EB_Garamond'] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#9B7E1F] group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Register Now
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="relative py-6 bg-gradient-to-r from-[#660000] via-[#8B0000] to-[#660000] overflow-hidden border-y-2 border-[#C9A227]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...highlights, ...highlights, ...highlights].map((highlight, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 font-['EB_Garamond'] text-xl text-[#E5C158]"
            >
              <Sparkles className="w-5 h-5 mr-3 text-[#C9A227]" />
              {highlight}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-5xl text-[#660000] mb-4">
              Why Vizphoria?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "👑",
                title: "Royal Experience",
                description: "Immerse yourself in Renaissance grandeur with exquisite decor and regal atmosphere",
              },
              {
                icon: "🎭",
                title: "Diverse Events",
                description: "From debate to dance, coding to fashion - something for every talent",
              },
              {
                icon: "🏆",
                title: "Big Prizes",
                description: "Compete for exciting prizes and recognition from industry leaders",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#C9A227]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#660000] mb-3">
                  {feature.title}
                </h3>
                <p className="font-['EB_Garamond'] text-lg text-[#4A0000]/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
