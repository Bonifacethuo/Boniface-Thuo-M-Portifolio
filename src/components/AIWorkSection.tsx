import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AIWorkSection = () => {
  return (
    <section id="ai-work" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Creative AI
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            AI in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Combining data and AI to create engaging, results-driven content and
            solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto glass-card p-3 rounded-2xl"
        >
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <video
              controls
              playsInline
              poster=""
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mt-8"
        >
          <p className="text-muted-foreground">
            This showcase demonstrates how AI-powered tools can be leveraged to
            create professional-grade content — from data-driven video ads to
            automated creative workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIWorkSection;
