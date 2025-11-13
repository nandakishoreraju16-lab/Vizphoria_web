import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Filter } from "lucide-react";
import { Badge } from "../ui/badge";

export function SchedulePage() {
  const [activeDay, setActiveDay] = useState<string>("all");
  const [activeClub, setActiveClub] = useState<string>("all");

  const days = [
    { id: "all", label: "All Days" },
    { id: "dec16", label: "Dec 16" },
    { id: "dec17", label: "Dec 17" },
    { id: "dec18", label: "Dec 18" },
    { id: "dec19", label: "Dec 19" },
  ];

  const clubs = [
    "all", "Debate", "Fashion", "Coding", "Dance", "Media", "Music"
  ];

  const schedule = [
    {
      day: "dec16",
      date: "December 16, 2025",
      events: [
        { time: "09:00 AM", name: "Registration Opens", venue: "Main Gate", club: "General", icon: "🎫" },
        { time: "11:00 AM", name: "Opening Ceremony", venue: "Main Auditorium", club: "General", icon: "🎊" },
        { time: "02:00 PM", name: "Renaissance Reels Submission", venue: "Online", club: "Media", icon: "🎬" },
        { time: "04:00 PM", name: "Campus Tour", venue: "Campus", club: "General", icon: "🚶" },
      ],
    },
    {
      day: "dec17",
      date: "December 17, 2025",
      events: [
        { time: "09:00 AM", name: "Debate Prelims Round 1", venue: "Seminar Hall A", club: "Debate", icon: "⚖️" },
        { time: "10:00 AM", name: "Parliamentary Debate", venue: "Main Auditorium", club: "Debate", icon: "🎙️" },
        { time: "02:00 PM", name: "Fashion Workshop", venue: "Design Studio", club: "Fashion", icon: "✂️" },
        { time: "06:00 PM", name: "Runway Renaissance", venue: "Grand Arena", club: "Fashion", icon: "👗" },
      ],
    },
    {
      day: "dec18",
      date: "December 18, 2025",
      events: [
        { time: "12:00 AM", name: "CodeVinci Hackathon Begins", venue: "Computer Lab", club: "Coding", icon: "💻" },
        { time: "11:00 AM", name: "Tech Talk: AI in Renaissance", venue: "Seminar Hall B", club: "Coding", icon: "🤖" },
        { time: "04:00 PM", name: "Baroque Ballet Battle", venue: "Open Air Theatre", club: "Dance", icon: "💃" },
        { time: "07:00 PM", name: "Cultural Night", venue: "Main Arena", club: "General", icon: "🎭" },
      ],
    },
    {
      day: "dec19",
      date: "December 19, 2025",
      events: [
        { time: "12:00 AM", name: "Hackathon Ends", venue: "Computer Lab", club: "Coding", icon: "🏁" },
        { time: "02:00 PM", name: "Renaissance Reels Screening", venue: "Auditorium", club: "Media", icon: "🎥" },
        { time: "05:00 PM", name: "Prize Distribution", venue: "Main Stage", club: "General", icon: "🏆" },
        { time: "07:00 PM", name: "Classical Symphony", venue: "Main Auditorium", club: "Music", icon: "🎵" },
        { time: "09:00 PM", name: "Grand Finale & Closing", venue: "Main Arena", club: "General", icon: "✨" },
      ],
    },
  ];

  const filteredSchedule = schedule
    .filter(day => activeDay === "all" || day.day === activeDay)
    .map(day => ({
      ...day,
      events: day.events.filter(event => 
        activeClub === "all" || event.club === activeClub
      ),
    }))
    .filter(day => day.events.length > 0);

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
            Event Schedule
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Plan your Renaissance journey with our detailed schedule
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Day Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#660000]" />
              <h3 className="font-['Playfair_Display'] text-xl text-[#660000]">Filter by Day</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {days.map((day) => (
                <motion.button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`px-6 py-2 rounded-full font-['EB_Garamond'] transition-all duration-300 border-2 ${
                    activeDay === day.id
                      ? "bg-[#660000] text-white border-[#C9A227]"
                      : "bg-white/60 text-[#660000] border-[#C9A227]/30 hover:border-[#C9A227]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {day.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Club Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#660000]" />
              <h3 className="font-['Playfair_Display'] text-xl text-[#660000]">Filter by Club</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {clubs.map((club) => (
                <motion.button
                  key={club}
                  onClick={() => setActiveClub(club)}
                  className={`px-6 py-2 rounded-full font-['EB_Garamond'] transition-all duration-300 border-2 ${
                    activeClub === club
                      ? "bg-[#660000] text-white border-[#C9A227]"
                      : "bg-white/60 text-[#660000] border-[#C9A227]/30 hover:border-[#C9A227]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {club}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-12">
          {filteredSchedule.map((daySchedule, dayIndex) => (
            <motion.div
              key={daySchedule.day}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1 }}
              className="relative"
            >
              {/* Day Header - Scroll Style */}
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-2xl p-6 border-4 border-[#C9A227] shadow-xl relative overflow-hidden">
                  {/* Scroll edge decorations */}
                  <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="flex items-center justify-center gap-4">
                    <Calendar className="w-8 h-8 text-[#E5C158]" />
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#E5C158]">
                      {daySchedule.date}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Events Timeline */}
              <div className="relative pl-8 md:pl-16 space-y-6">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A227] via-[#E5C158] to-[#C9A227]" />

                {daySchedule.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: eventIndex * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-[26px] md:-left-[34px] top-6 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#C9A227] border-4 border-[#F5F1E8] shadow-lg"
                      whileHover={{ scale: 1.3 }}
                    />

                    {/* Event Card */}
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border-2 border-[#C9A227]/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/0 via-[#C9A227]/10 to-[#C9A227]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{event.icon}</span>
                            <div>
                              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#660000]">
                                {event.name}
                              </h3>
                              <Badge className="mt-1 bg-[#660000]/90 text-white border-[#C9A227]">
                                {event.club}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-[#C9A227] font-['EB_Garamond'] text-lg whitespace-nowrap">
                            <Clock className="w-5 h-5" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[#4A0000] font-['EB_Garamond']">
                          <MapPin className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSchedule.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-['EB_Garamond'] text-2xl text-[#4A0000]">
              No events match your filters. Try adjusting your selection.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
