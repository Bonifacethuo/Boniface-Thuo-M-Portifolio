import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Let's Turn Your Data into{" "}
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Ready to unlock the power of your data? Let's discuss how I can help
            your business grow with data science and AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          <a
            href="mailto:bonithuo@gmail.com"
            className="glass-card p-6 hover-lift flex flex-col items-center gap-3"
          >
            <Mail className="text-primary" size={24} />
            <span className="text-sm text-muted-foreground">bonithuo@gmail.com</span>
          </a>
          <a
            href="tel:+254705719068"
            className="glass-card p-6 hover-lift flex flex-col items-center gap-3"
          >
            <Phone className="text-primary" size={24} />
            <span className="text-sm text-muted-foreground">+254 705 719 068</span>
          </a>
          <a
            href="https://www.linkedin.com/in/boniface-thuo-52ab3816a/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 hover-lift flex flex-col items-center gap-3"
          >
            <Linkedin className="text-primary" size={24} />
            <span className="text-sm text-muted-foreground">LinkedIn Profile</span>
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          href="#"
          className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
