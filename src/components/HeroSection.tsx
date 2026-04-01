import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Video Background - rendered bright and clear */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[1.0] contrast-[1.05]"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Very light overlay for a clean, bright look */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: "rgba(255, 255, 255, 0.25)",
          zIndex: 1 
        }}
      />

      {/* Bottom fade to seamlessly blend into the dark theme of the next section */}
      <div 
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" 
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-white/60 backdrop-blur-md border border-white/40 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-900 mb-6 tracking-wider uppercase shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
            Data Scientist & Workflow Specialist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-slate-900"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
        >
          Turning Data into{" "}
          <span className="gradient-text">Insights, Automation,</span> and
          Business Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-10 font-medium"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
        >
          I help businesses transform raw data into clear decisions, automated
          workflows, and scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,100,200,0.2)] transition-all duration-300"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="bg-white/70 backdrop-blur-sm border border-slate-300 px-8 py-3.5 rounded-lg font-semibold text-slate-900 flex items-center gap-2 hover:bg-white hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300"
          >
            <Briefcase size={18} /> Hire Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1.5 backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-colors cursor-pointer">
          <div className="w-1.5 h-2.5 rounded-full bg-slate-600 shadow-sm" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
