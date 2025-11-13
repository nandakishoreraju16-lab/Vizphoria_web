import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Award, Clock, Users, IndianRupee, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

interface Event {
  id: string;
  name: string;
  club: string;
  time: string;
  date: string;
  venue: string;
  description: string;
  features: string[];
  prize: string;
  fee: string;
  poc: { name: string; phone: string };
  icon: string;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeClub, setActiveClub] = useState<string>("all");

  const clubs = [
    { id: "all", name: "All Events", color: "#C9A227" },
    { id: "debate", name: "Debate Club", color: "#660000" },
    { id: "fashion", name: "Fashion Club", color: "#8B4789" },
    { id: "coding", name: "Coding Club", color: "#2C5F2D" },
    { id: "dance", name: "Dance Club", color: "#D97706" },
    { id: "media", name: "Media Club", color: "#1E40AF" },
    { id: "music", name: "Music Club", color: "#BE123C" },
  ];

  const events: Event[] = [
    {
      id: "parl-debate",
      name: "Parliamentary Debate",
      club: "debate",
      time: "10:00 AM - 1:00 PM",
      date: "December 17, 2025",
      venue: "Main Auditorium",
      description: "Engage in intellectual discourse with the finest debaters. Renaissance-style parliamentary format.",
      features: ["Teams of 4", "4 Preliminary Rounds", "Grand Finals", "Professional Adjudication"],
      prize: "₹15,000",
      fee: "₹300 per team",
      poc: { name: "Arjun Mehta", phone: "+91 98765 43210" },
      icon: "⚖️",
    },
    {
      id: "runway-renaissance",
      name: "Runway Renaissance",
      club: "fashion",
      time: "6:00 PM - 9:00 PM",
      date: "December 17, 2025",
      venue: "Grand Arena",
      description: "A spectacular fashion show blending Renaissance elegance with modern couture.",
      features: ["Solo & Group Categories", "Theme: Royal Elegance", "Professional Ramp", "Celebrity Judges"],
      prize: "₹20,000",
      fee: "₹500",
      poc: { name: "Priya Sharma", phone: "+91 98765 43211" },
      icon: "👗",
    },
    {
      id: "hackathon",
      name: "CodeVinci Hackathon",
      club: "coding",
      time: "24 Hours",
      date: "December 18-19, 2025",
      venue: "Computer Lab",
      description: "Build innovative solutions in this Renaissance-inspired coding marathon.",
      features: ["24-Hour Sprint", "AI/ML Track", "Web Development", "Industry Mentors"],
      prize: "₹30,000",
      fee: "₹600 per team",
      poc: { name: "Rahul Verma", phone: "+91 98765 43212" },
      icon: "💻",
    },
    {
      id: "baroque-dance",
      name: "Baroque Ballet Battle",
      club: "dance",
      time: "4:00 PM - 7:00 PM",
      date: "December 18, 2025",
      venue: "Open Air Theatre",
      description: "Showcase your grace and rhythm in classical and contemporary dance forms.",
      features: ["Solo, Duo & Group", "All Dance Styles", "Professional Stage", "Live Music"],
      prize: "₹12,000",
      fee: "₹400",
      poc: { name: "Sneha Patel", phone: "+91 98765 43213" },
      icon: "💃",
    },
    {
      id: "short-film",
      name: "Renaissance Reels",
      club: "media",
      time: "Submission Deadline",
      date: "December 16, 2025",
      venue: "Online Submission",
      description: "Create cinematic masterpieces inspired by Renaissance art and storytelling.",
      features: ["5-10 Minutes", "Any Genre", "Theme: Renaissance", "Red Carpet Screening"],
      prize: "₹18,000",
      fee: "₹350",
      poc: { name: "Aditya Singh", phone: "+91 98765 43214" },
      icon: "🎬",
    },
    {
      id: "symphony",
      name: "Classical Symphony",
      club: "music",
      time: "7:00 PM - 10:00 PM",
      date: "December 19, 2025",
      venue: "Main Auditorium",
      description: "A musical evening celebrating classical compositions and modern interpretations.",
      features: ["Solo & Band", "Instruments Welcome", "Vocal Categories", "Professional Sound"],
      prize: "₹16,000",
      fee: "₹300",
      poc: { name: "Kavya Reddy", phone: "+91 98765 43215" },
      icon: "🎵",
    },
  ];

  const filteredEvents = activeClub === "all" 
    ? events 
    : events.filter(e => e.club === activeClub);

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
            Festival Events
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Explore our diverse collection of competitions and performances across six vibrant clubs
          </p>
        </motion.div>

        {/* Club Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {clubs.map((club, index) => (
            <motion.button
              key={club.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveClub(club.id)}
              className={`px-6 py-3 rounded-full font-['EB_Garamond'] text-lg transition-all duration-300 border-2 ${
                activeClub === club.id
                  ? "bg-[#660000] text-white border-[#C9A227] shadow-lg scale-105"
                  : "bg-white/60 text-[#660000] border-[#C9A227]/30 hover:border-[#C9A227] hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {club.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-[#C9A227]/40 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Ornamental frame effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C9A227]" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C9A227]" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C9A227]" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C9A227]" />
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/0 via-[#C9A227]/5 to-[#C9A227]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative p-6 z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">{event.icon}</div>

                  {/* Event Name */}
                  <h3 className="font-['Playfair_Display'] text-2xl text-[#660000] mb-2 text-center">
                    {event.name}
                  </h3>

                  {/* Club Badge */}
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-[#660000]/90 text-white border-[#C9A227]">
                      {clubs.find(c => c.id === event.club)?.name}
                    </Badge>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-2 text-center font-['EB_Garamond'] text-[#4A0000]">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-[#C9A227]" />
                      <span className="text-[#C9A227]">{event.prize}</span>
                    </div>
                  </div>

                  {/* Hover prompt */}
                  <div className="mt-4 text-center">
                    <span className="text-sm font-['EB_Garamond'] text-[#660000]/60 group-hover:text-[#C9A227] transition-colors">
                      Click for details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#F5F1E8] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-[#C9A227] shadow-2xl relative"
              >
                {/* Ornamental corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#660000] rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#660000] rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#660000] rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#660000] rounded-br-lg" />

                <div className="p-8 md:p-12">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-[#660000] text-white hover:bg-[#8B0000] transition-colors z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Event Icon */}
                  <div className="text-7xl text-center mb-6">{selectedEvent.icon}</div>

                  {/* Event Name */}
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#660000] text-center mb-4">
                    {selectedEvent.name}
                  </h2>

                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />

                  {/* Description */}
                  <p className="font-['EB_Garamond'] text-xl text-[#4A0000] text-center mb-8">
                    {selectedEvent.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/60 p-4 rounded-xl border-2 border-[#C9A227]/30">
                      <div className="flex items-center gap-2 text-[#660000] mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-['Playfair_Display']">Time & Date</span>
                      </div>
                      <p className="font-['EB_Garamond'] text-[#4A0000]">{selectedEvent.time}</p>
                      <p className="font-['EB_Garamond'] text-[#4A0000]">{selectedEvent.date}</p>
                    </div>

                    <div className="bg-white/60 p-4 rounded-xl border-2 border-[#C9A227]/30">
                      <div className="flex items-center gap-2 text-[#660000] mb-2">
                        <Award className="w-5 h-5" />
                        <span className="font-['Playfair_Display']">Prize & Fee</span>
                      </div>
                      <p className="font-['EB_Garamond'] text-[#C9A227]">Prize: {selectedEvent.prize}</p>
                      <p className="font-['EB_Garamond'] text-[#4A0000]">Fee: {selectedEvent.fee}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-['Playfair_Display'] text-2xl text-[#660000] mb-4">
                      Event Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedEvent.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 font-['EB_Garamond'] text-[#4A0000]"
                        >
                          <span className="text-[#C9A227]">✦</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* POC Info */}
                  <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] p-6 rounded-xl mb-6">
                    <h3 className="font-['Playfair_Display'] text-xl text-[#E5C158] mb-3">
                      Point of Contact
                    </h3>
                    <div className="text-white font-['EB_Garamond']">
                      <p className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4" />
                        {selectedEvent.poc.name}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {selectedEvent.poc.phone}
                      </p>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button
                    onClick={() => {
                      setSelectedEvent(null);
                      onNavigate("register");
                    }}
                    className="w-full bg-gradient-to-r from-[#C9A227] to-[#E5C158] hover:from-[#E5C158] hover:to-[#C9A227] text-[#1A1A1A] py-6 text-xl font-['EB_Garamond'] rounded-full shadow-xl"
                  >
                    Register for this Event
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
