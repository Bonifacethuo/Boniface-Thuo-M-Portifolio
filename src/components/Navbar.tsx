import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    // Initialize state on mount in case the page is already scrolled
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-glass-border shadow-lg" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="text-xl font-heading font-bold gradient-text">
          Boniface Thuo
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-slate-800 hover:text-blue-700 drop-shadow-sm"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-bg text-white text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-slate-900"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              scrolled 
                ? "glass-card border-t border-glass-border" 
                : "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl"
            }`}
          >
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-semibold transition-colors px-2 py-1 rounded-md ${
                    scrolled 
                      ? "text-muted-foreground hover:text-foreground hover:bg-white/5" 
                      : "text-slate-800 hover:text-blue-700 hover:bg-slate-100/50"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
