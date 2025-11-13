import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Crown } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "schedule", label: "Schedule" },
    { id: "register", label: "Register" },
    { id: "gallery", label: "Gallery" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#660000] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="cursor-pointer flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick("home")}
            >
              <Crown className={`w-8 h-8 ${
                scrolled ? "text-[#E5C158]" : "text-[#C9A227]"
              }`} />
              <h1 
                className="text-3xl font-['Playfair_Display'] italic"
                style={{
                  backgroundImage: scrolled 
                    ? 'linear-gradient(135deg, #E5C158 0%, #C9A227 100%)'
                    : 'linear-gradient(135deg, #C9A227 0%, #E5C158 50%, #C9A227 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  textShadow: scrolled 
                    ? '0 2px 8px rgba(229, 193, 88, 0.3)' 
                    : '0 2px 12px rgba(201, 162, 39, 0.4)',
                }}
              >
                Vizphoria
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2 rounded-full font-['EB_Garamond'] text-lg transition-all duration-300 relative overflow-hidden group ${
                    currentPage === item.id
                      ? "text-[#C9A227]"
                      : scrolled
                      ? "text-white hover:text-[#E5C158]"
                      : "text-[#660000] hover:text-[#C9A227]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full border border-[#C9A227]/50"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/0 via-[#C9A227]/20 to-[#C9A227]/0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 ${
                scrolled ? "text-white" : "text-[#660000]"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Ornamental bottom border */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-[#660000] shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-4 px-6 rounded-lg font-['EB_Garamond'] text-xl transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-[#C9A227]/20 text-[#E5C158] border-l-4 border-[#C9A227]"
                      : "text-white hover:bg-white/10 hover:text-[#E5C158]"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
