import { motion } from "framer-motion";

const videos = [
  {
    title: "Oloitoktok Land Alert",
    embedUrl: "https://www.youtube.com/embed/jIdTwWGU3Zg?modestbranding=1&rel=0&showinfo=0",
    description: "A high-impact real estate alert video designed to capture attention quickly and drive interest in land investment opportunities through clear and engaging messaging.",
    tags: ["Real Estate", "Marketing", "Animation"]
  },
  {
    title: "Excellent Choice Land Investment",
    embedUrl: "https://www.youtube.com/embed/CBWvZtAa_Kg?modestbranding=1&rel=0&showinfo=0",
    description: "Data-driven promotional video designed to showcase real estate opportunities and attract potential investors.",
    tags: ["Real Estate", "Strategic Video", "Marketing"]
  },
  {
    title: "Monross Hardware",
    embedUrl: "https://www.youtube.com/embed/OMU49Qz3OTg?modestbranding=1&rel=0&showinfo=0",
    description: "Algorithmic product marketing video highlighting hardware products to increase visibility and engagement.",
    tags: ["Retail", "Data Analytics", "Product Ads"]
  },
  {
    title: "Oloitoktok Campaign",
    embedUrl: "https://www.youtube.com/embed/_Njs_TRgdqk?modestbranding=1&rel=0&showinfo=0",
    description: "Location-based promotional video using data insights to present local opportunities and drive awareness through storytelling.",
    tags: ["Location Marketing", "Analytics", "Branding"]
  },
  {
    title: "Tosh Baby Shop",
    embedUrl: "https://www.youtube.com/embed/5XDLqEfVyf4?modestbranding=1&rel=0&showinfo=0",
    description: "Strategic ad crafted to promote baby products with a warm, engaging tone optimized for peak impression rates.",
    tags: ["E-commerce", "Metrics-Driven", "Retail"]
  },
  {
    title: "Nilzan Supermarket",
    embedUrl: "https://www.youtube.com/embed/LPNSqaJGcXQ?modestbranding=1&rel=0&showinfo=0",
    description: "Targeted marketing video designed to showcase supermarket products and attract high-value customers.",
    tags: ["Supermarket", "Conversion", "Ads"]
  },
  {
    title: "Vintage Mabati",
    embedUrl: "https://www.youtube.com/embed/OaqvBugmEjY?modestbranding=1&rel=0&showinfo=0",
    description: "Data-backed promotional content highlighting construction materials with clear messaging and strong visual appeal.",
    tags: ["Construction", "Marketing Strategy", "Product Marketing"]
  },
  {
    title: "OMO Campaign",
    embedUrl: "https://www.youtube.com/embed/vBZ5n6p46po?modestbranding=1&rel=0&showinfo=0",
    description: "Creative, analytics-driven advertisement focused on brand awareness and engaging storytelling.",
    tags: ["FMCG", "Strategic Growth", "Branding"]
  },
  {
    title: "Vintage Mabati Mills – Audio to Visual Demo",
    embedUrl: "https://www.youtube.com/embed/LR6o0TY1Zec?modestbranding=1&rel=0&showinfo=0",
    description: "A creative production that transforms audio into engaging visual content, showcasing the ability to deliver compelling marketing experiences.",
    tags: ["Creative", "Animation", "Visual Production"]
  }
];

const AIMarketingSection = () => {
  return (
    <section id="marketing-action" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            AI Marketing & <span className="gradient-text">Animation</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I create targeted, data-backed videos that help businesses capture attention, communicate value clearly, and empirically increase engagement.
          </p>
        </motion.div>

        {/* Extra Conversion Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-14 text-center max-w-3xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2 relative z-10 text-foreground">
            Struggling to market your product seamlessly?
          </h3>
          <p className="text-muted-foreground relative z-10 font-medium">
            Let's build data-driven videos that capture attention and drive measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift flex flex-col group border border-glass-border/50 relative shadow-soft"
            >
              {/* Overlay blue/purple subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Video Embed */}
              <div className="aspect-video w-full overflow-hidden bg-black/10 relative z-10">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-background/50 backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {video.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {video.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium tracking-wide shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
