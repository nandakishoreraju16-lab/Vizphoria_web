import { motion } from "motion/react";
import { Mail, Phone, MapPin, User, Crown } from "lucide-react";

export function ContactPage() {
  const coreTeam = [
    {
      name: "Arjun Mehta",
      role: "Festival Coordinator",
      department: "Overall Management",
      phone: "+91 98765 43210",
      email: "arjun@vizphoria.com",
      icon: "👑",
    },
    {
      name: "Priya Sharma",
      role: "Events Head",
      department: "Event Management",
      phone: "+91 98765 43211",
      email: "priya@vizphoria.com",
      icon: "🎭",
    },
    {
      name: "Rahul Verma",
      role: "Technical Head",
      department: "Tech & Coding",
      phone: "+91 98765 43212",
      email: "rahul@vizphoria.com",
      icon: "💻",
    },
    {
      name: "Sneha Patel",
      role: "Cultural Head",
      department: "Dance & Music",
      phone: "+91 98765 43213",
      email: "sneha@vizphoria.com",
      icon: "🎵",
    },
    {
      name: "Aditya Singh",
      role: "Media & PR Head",
      department: "Communications",
      phone: "+91 98765 43214",
      email: "aditya@vizphoria.com",
      icon: "📱",
    },
    {
      name: "Kavya Reddy",
      role: "Sponsorship Head",
      department: "Partnerships",
      phone: "+91 98765 43215",
      email: "kavya@vizphoria.com",
      icon: "🤝",
    },
    {
      name: "Rohan Kumar",
      role: "Logistics Head",
      department: "Operations",
      phone: "+91 98765 43216",
      email: "rohan@vizphoria.com",
      icon: "📦",
    },
    {
      name: "Ananya Iyer",
      role: "Design Head",
      department: "Creative & Design",
      phone: "+91 98765 43217",
      email: "ananya@vizphoria.com",
      icon: "🎨",
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
            Contact Us
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
          <p className="font-['EB_Garamond'] text-xl text-[#4A0000] max-w-3xl mx-auto">
            Meet the royal court behind Vizphoria's Renaissance celebration
          </p>
        </motion.div>

        {/* General Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F5F1E8] to-[#EDE9E0] rounded-3xl p-12 border-4 border-[#C9A227] shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzY2MDAwMCIvPjwvc3ZnPg==')]" />

              {/* Ornamental corners */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[#660000]/20 rounded-tl-2xl" />
              <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[#660000]/20 rounded-tr-2xl" />
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[#660000]/20 rounded-bl-2xl" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[#660000]/20 rounded-br-2xl" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <Crown className="w-16 h-16 text-[#C9A227] mx-auto mb-4" />
                  <h2 className="font-['Playfair_Display'] text-3xl text-[#660000] mb-2">
                    Vizphoria 2025
                  </h2>
                  <p className="font-['EB_Garamond'] text-lg text-[#4A0000]">
                    Renaissance Festival Headquarters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-[#C9A227]/30">
                    <Mail className="w-8 h-8 text-[#660000] mx-auto mb-3" />
                    <h3 className="font-['Playfair_Display'] text-lg text-[#660000] mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@vizphoria.com"
                      className="font-['EB_Garamond'] text-[#4A0000] hover:text-[#C9A227] transition-colors"
                    >
                      info@vizphoria.com
                    </a>
                  </div>

                  <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-[#C9A227]/30">
                    <Phone className="w-8 h-8 text-[#660000] mx-auto mb-3" />
                    <h3 className="font-['Playfair_Display'] text-lg text-[#660000] mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+919876543200"
                      className="font-['EB_Garamond'] text-[#4A0000] hover:text-[#C9A227] transition-colors"
                    >
                      +91 98765 43200
                    </a>
                  </div>

                  <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-[#C9A227]/30">
                    <MapPin className="w-8 h-8 text-[#660000] mx-auto mb-3" />
                    <h3 className="font-['Playfair_Display'] text-lg text-[#660000] mb-2">
                      Location
                    </h3>
                    <p className="font-['EB_Garamond'] text-[#4A0000]">
                      College Campus<br />Main Building
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Team Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-4xl text-[#660000] mb-4">
              Meet Our Core Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4" />
            <p className="font-['EB_Garamond'] text-lg text-[#4A0000]">
              The dedicated individuals orchestrating this grand celebration
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-[#F5F1E8] to-[#EDE9E0] rounded-2xl overflow-hidden border-4 border-[#C9A227]/40 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Renaissance crest background */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#660000] to-[#8B0000] overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#C9A227" strokeWidth="2" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#C9A227" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>

                  {/* Ornamental frame */}
                  <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg" />

                  <div className="relative p-6 pt-20">
                    {/* Portrait Icon */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A227] to-[#E5C158] flex items-center justify-center text-5xl border-4 border-[#F5F1E8] shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {member.icon}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-3 mt-6">
                      <h3 className="font-['Playfair_Display'] text-xl text-[#660000]">
                        {member.name}
                      </h3>
                      
                      <div className="space-y-1">
                        <p className="font-['EB_Garamond'] text-lg text-[#C9A227]">
                          {member.role}
                        </p>
                        <p className="font-['EB_Garamond'] text-sm text-[#4A0000]/70">
                          {member.department}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-16 h-px bg-[#C9A227]/50 mx-auto" />

                      {/* Contact Info */}
                      <div className="space-y-2 pt-2">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center justify-center gap-2 text-sm font-['EB_Garamond'] text-[#4A0000] hover:text-[#C9A227] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center gap-2 text-sm font-['EB_Garamond'] text-[#4A0000] hover:text-[#C9A227] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-3xl p-12 border-4 border-[#C9A227] shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
            
            <User className="w-16 h-16 text-[#E5C158] mx-auto mb-4" />
            <h2 className="font-['Playfair_Display'] text-4xl text-[#E5C158] mb-4">
              Have Questions?
            </h2>
            <p className="font-['EB_Garamond'] text-xl text-white/90 max-w-2xl mx-auto mb-6">
              Our team is here to assist you. Reach out to any of our coordinators for inquiries about events, registration, or partnerships.
            </p>
            <div className="w-32 h-1 bg-[#C9A227] mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
